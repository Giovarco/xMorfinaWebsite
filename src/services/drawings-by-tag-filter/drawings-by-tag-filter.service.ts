import { Injectable } from '@angular/core';
import { Drawing } from '../../interfaces/Drawing';

@Injectable({
  providedIn: 'root'
})
export class DrawingsByTagFilterService {

  constructor() { }

  static filterByTag(drawings: Drawing[], inputFilter: string): Drawing[] {

    /**
     * Input user tags
     */
    const tags: Array<string> = this.isValidFilter(inputFilter);

    if (tags) {
      // Iterate over all drawings
      return drawings.filter( (drawing: Drawing) => {

        // Check if the current drawing has at least one tag that matches the inputFilter
        let isCoherentDrawing = false;

        // Iterate over all drawing tags
        drawing.tags.forEach(singleDrawingTag => {
          
          // Iterate over all input user tags
          tags.forEach(inputUserTag => {

            // Check if the an input user tag is a substring of a single drawing tag 
            if ( singleDrawingTag.indexOf(inputUserTag) !== -1 ) {
              isCoherentDrawing = true;
            }
            
          });


        });

        return isCoherentDrawing;

      });
    } else {
      return [] as Drawing[];
    }

  }

  /**
   * This function return an array of valid tags based on an input string. If an invalid string is given, it returns null
   */
  private static isValidFilter(inputFilter: string): Array<string> {

    let tags: Array<string> = inputFilter.split(";");
    tags = tags.map(value => value.trim()); // Trim all array value
    tags = tags.filter( tag => tag !== "" ); // Remove empty tags

    if (tags.length > 0) {
      return tags;
    } else {
      return null;
    }
    
  }

}
