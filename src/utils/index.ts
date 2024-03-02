/**
 * @description 生成长度为count，元素数值小于等于range大小的数组
 *@params count   Number
 @params range Number
 @returns result  数组，ex [46,12,19...]
 */

export function generateNumList(count: number, range: number): number[] {
  let result: number[] = [];
  for (let i = 0; i < count; i++) {
    const num = Number((Math.random() * range).toFixed(0));
    result.push(num);
  }
  return result;
}
