def find_common_substr(string_one, string_two)
    answer = "NO"
    string_one_array = string_one.split("").uniq
    string_two_array = string_two.split("").uniq
    string_two_array.each_with_index do |letter, index| 
        if string_one_array.include? letter
            answer = "YES"
            break 
        end 
    end 
    puts answer 
end 

test_cases = gets.strip.to_i 
test_cases.times do 
    a = gets.strip 
    b = gets.strip 
    find_common_substr(a, b)
end 