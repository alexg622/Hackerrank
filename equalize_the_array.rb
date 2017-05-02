integers = gets.strip.to_i 
array = gets.strip

def numbers_to_delete(numbers)
  count = numbers.each_with_object(Hash.new(0)) {|num, count| count[num] += 1 }
  golden_number = count.key(count.values.max)
  answer = 0 
  numbers.each do |num|
    if num != golden_number
      answer += 1 
    end 
  end 
  answer
end 
def string_to_array(string)
  string.length.times do |i|
    if string[i] == " "
      string[i] = ","
    end 
  end 
  numbers_array = string.split(",").each_with_object([]) {|num, numbers_array| numbers_array << num.to_i}
  numbers_array
end
puts numbers_to_delete(string_to_array(array))