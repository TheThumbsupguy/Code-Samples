/**
 * Checks if b is a substring of a.
 *
 * @param {String} a
 * @param {String} b
 * @return {Boolean} valid
 */
function is_substring(a, b)
{ 
  // Vars
  var valid = false;
  
  // Loop through each character of the first string.
  for (var i = 0; i < a.length; i++)
  {
    // If the first character of second string matches
    // the current character of the first string, then
    // begin a substring check.
    if (b[0] == a[i])
    {
      // Vars
      var substring = a[i];
      
      // Loop through the rest of the characters from 
      // the second string and construct substring
      // from "a" based on the length from string "b".
      for (var j=1; j<b.length; j++) substring += a[i+j];
      
      // If the current check passes, then the substring is valid.
      if (substring == b)
      {
        valid = true;
        return valid;
      }
    }
  }
  
  // If the substring is not valid, return false.
  return valid;
}