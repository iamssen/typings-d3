/** @link https://github.com/d3/d3-polygon */
declare module 'd3-polygon' {
  /**
   * ```
   * const rect:[number,number][] = [[0, 0], [100, 0], [100, 100], [0, 100]];
   * polygonArea(rect) // -10000
   * polygonArea([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]) // 1
   * ```
   */
// TODO this api for what?
  function polygonArea(polygon:[number,number][]):number;
  
  /**
   * ```
   * const rect:[number,number][] = [[0, 0], [100, 0], [100, 100], [0, 100]];
   * polygonCentroid(rect) // [50, 50]
   * ```
   */
  function polygonCentroid(polygon:[number,number][]):[number,number];
  
  /**
   * ```
   * const rect:[number,number][] = [[0, 0], [100, 0], [100, 100], [0, 100]];
   * polygonHull(rect) // [ [ 100, 100 ], [ 100, 0 ], [ 0, 0 ], [ 0, 100 ] ]
   * ```
   */
  function polygonHull(polygon:[number,number][]):[number,number][];
  
  /**
   * ```
   * const rect:[number,number][] = [[0, 0], [100, 0], [100, 100], [0, 100]];
   * polygonContains(rect, [50,50]) // true
   * polygonContains(rect, [150,50]) // false
   * polygonContains(rect, [50,150]) // false
   * ```
   */
  function polygonContains(polygon:[number,number][], test:[number,number]):boolean;
  
  /**
   * ```
   * const rect:[number,number][] = [[0, 0], [100, 0], [100, 100], [0, 100]];
   * polygonLength(rect) // 400
   * ```
   */
  function polygonLength(polygon:[number,number][]):number;
}