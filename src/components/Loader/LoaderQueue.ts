import { LoaderActions } from "./types";

export class LoaderQueue {
  constructor(loaderActions: LoaderActions) {
    this.queue = [];
    this.loaderActions = loaderActions;
  }

  remove(id: string): void {
    const currentIdIndex = this.getCurrentIndex(id);
    if (currentIdIndex < 0) {
      console.warn(
        `Trying to remove asset with id '${id}' that does not exist in the loading queue. Check if it has been added. ${
          this.queue.length ? `Current queue: ${this.queue}` : ""
        }`
      );

      return;
    }

    this.queue.splice(currentIdIndex, 1);

    if (!this.queue.length) {
      this.loaderActions.hideLoader();
    }
  }

  add(id: string): void {
    const currentIdIndex = this.getCurrentIndex(id);

    if (!this.queue.length) {
      this.loaderActions.showLoader();
    }

    if (currentIdIndex < 0) {
      this.queue.push(id);
    }
  }

  private getCurrentIndex(id: string) {
    return this.queue.findIndex((ele) => ele === id);
  }

  private queue: string[];
  private loaderActions;
}
