  
module.exports = function check(str, bracketsConfig) {
  global = true;
  let a = str;
  let b = bracketsConfig;
  for ( i=1 ; i < a.length; i++)
  {
      for(let c = 0; c < bracketsConfig.length; c++ )
      {
        if (a[i-1] == b[c][0] && a[i] == b[c][1] )
        {
          a = a.substring( 0, i-1 ) + a.substring ( i+1, a.length);
          i = 0;
          break;
        }
      }
      
      
  }
  if ( a.length == 0)
  {
      global = true;
  }
  else 
  {
    global = false;
  }
  return global;
}


/*let str = '([{}])';
let bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}']];
let res = check(str, bracketsConfig) ;
console.log(res); 
*/