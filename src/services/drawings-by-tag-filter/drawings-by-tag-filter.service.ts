import { Injectable } from '@angular/core';
import { Drawing } from '../../interfaces/Drawing';

@Injectable({
  providedIn: 'root'
})
export class DrawingsByTagFilterService {

  constructor() { }

  /**
   * This function return a list of drawings that matches the user input tags.
   * A drawing will be in this list if at least one of the user input tags matches partially ( = is substring of )
   * at least one of the drawings tags
   */
  static filterByTag(drawings: Drawing[], inputFilter: string): Drawing[] {

    const validTags: Array<string> = this.getValidUserFilters(inputFilter);

    if (validTags) {
      return DrawingsByTagFilterService.getCoherentDrawings(drawings, validTags);
    } else {
      return [] as Drawing[];
    }

  }

  /**
   * This function return a list of drawings that match the user input tags.
   * Please note that userTags is a safe source of information because it was preprocessed
   */
  private static getCoherentDrawings(drawings: Drawing[], userTags: Array<string>): Drawing[] {
    
    const coherentDrawings = drawings.filter( (drawing: Drawing) => {

      /**
       * This variable is true when the current drawing matches user input tags
       */
      let isDrawingCoherent = false;

      /**
       * This variable specifies the maximum number of matches between drawing tags and user tags
       */
      const maxMatches = drawing.tags.length  * userTags.length;

      /**
       * This variable specifies the number of drawing tags that match user input tags
       */
      let userTagMatches = 0;
      
      // Iterate over all drawing tags
      drawing.tags.forEach( singleDrawingTag => {
        if ( DrawingsByTagFilterService.doesDrawingTagsMatchUserTags(singleDrawingTag, userTags) ) {
          userTagMatches++;
        }
      });

      // Check if at least one user input tag match the drawings tags
      if (userTagMatches > 0 && userTagMatches <= maxMatches) {
        isDrawingCoherent = true;
      }

      return isDrawingCoherent;

    });

    // Return only coherent drawings
    return coherentDrawings;

  }

  /**
   * This functions returns true if singleDrawingTag is substring of at least one of the user tags
   */
  private static doesDrawingTagsMatchUserTags(singleDrawingTag: string, userTags: Array<string>) {

    /**
     * Match is true if singleDrawingTag is substring of at least one of the user tags
     */
    const match = userTags.some(singleUserTag => {
      if ( singleDrawingTag.includes(singleUserTag) ) {
        return true;
      } else {
        return false;
      }
    });

    return match;

  }

  /**
   * This function return an array of valid tags based on an input string. If an invalid string is given, it returns null
   */
  private static getValidUserFilters(inputFilter: string): Array<string> {

    let tags: Array<string> = inputFilter.split(";");
    tags = tags.map(value => value.trim().toLowerCase() ); // Trim all array value
    tags = tags.filter( tag => tag !== "" ); // Remove empty tags

    if (tags.length > 0) {
      return tags;
    } else {
      return null;
    }
    
  }

}
