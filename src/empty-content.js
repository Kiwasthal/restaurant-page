export {emptyContent};

let emptyContent = (parent) => {
        while (parent.lastElementChild) {
          parent.removeChild(parent.lastElementChild);
        }
    }