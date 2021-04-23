import { Subject } from "rxjs";
const visibilitySubject = new Subject<string>();

export const componentVisibilityOrchestrator = {
  registerComponent: (document: any, componentId: string) => {
    const colorElement: any = document.querySelector("#" + componentId);

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: [1],
    };

    let observer = new IntersectionObserver((entries, observer) => {
      console.log("-----------------------------");
      console.log("from intersection observer", componentId);
      console.log("entries", entries);
      console.log("-----------------------------");
      // todo: add a debounce here
      if (entries[0].isIntersecting) {
        visibilitySubject.next(componentId);
      }
    }, options);

    observer.observe(colorElement);
  },
  visibility$: visibilitySubject.asObservable(),
  setActive: (componentId: string) => visibilitySubject.next(componentId),
};
