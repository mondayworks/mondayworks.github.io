import jq from "jquery";
import Vivus from "vivus";

class Iterator {
    constructor(items) {
      this.items = items;
      this.index = 0;
      this.next = this.next.bind(this);
    }
  
    next() {
      const item = this.items[this.index];
      this.index++;
  
      if (this.index >= this.items.length) {
        this.index = 0;
      }
  
      return item;
    }
}

class Carousel {
    constructor(iterator) {
        this.iterator = iterator;
        this.play = this.play.bind(this);
    }

    play() {
        const sketchId = this.iterator.next();
      
        return new Promise(resolve => {
          const animation = new Vivus(sketchId, {
            type: 'oneByOne',
            duration: 400,
            delay: 0,
            dashGap: 4,
            start: "autostart",
            animTimingFunction: Vivus.EASE_OUT,
            selfDestroy: true,
          }, function() {
              resolve();
          });

          jq("#" + sketchId).removeClass("is-hidden");
          jq("#" + sketchId).show();

          animation.play(1);
        })
        .then(() => {
          return new Promise(resolve => {
            jq("#" + sketchId).fadeOut(1000, function() {
              resolve(this);
            });  
          });
        })
        .then(() => {
          return this.play();
        });
    }    
}

export default class Sketches {
    start() {
        const elements = document.getElementsByClassName("hero-sketch");
        const ids = Array.from(elements).map(x => x.id);

        const iterator = new Iterator(ids);
        const carousel = new Carousel(iterator);
        carousel.play();
    }
}