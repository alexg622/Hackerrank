# righ answer but timing out in progress
string = gets.strip
def valid_string(string)
  string_sorted = string.chars.sort 
  counter = 0 
  chars_hash = {string_sorted[0] => 0}
  for i in 0...string.length
    if string_sorted[counter] == string_sorted[i]
      chars_hash[string_sorted[counter]] += 1 
    else 
      counter = i 
      chars_hash[string_sorted[counter]] = 1
    end 
  end 
  answer = "YES"
  sorted_chars_hash = chars_hash.values.sort 
  for i in 0...sorted_chars_hash.length - 1  
    if sorted_chars_hash[i] != sorted_chars_hash[i + 1] 
      answer = "NO"
    end 
  end 
  answer
end 
def is_valid_with_delete(string)
  if valid_string(string) == "YES"
     answer = "YES"
  else 
    for i in 0...string.length 
      new_string = string.chars 
      new_string.delete_at(i)
      if valid_string(new_string.join("")) == "YES"
        answer = "YES"
        break 
      else 
        answer = "NO"
      end 
    end 
  end 
  puts answer 
end 