def make_string_alternate(string)
    string_array = string.split("")
    letters_to_delete = 0 
    string_array.each_with_index do |letter, index|
        if letter == string_array[index + 1]
            letters_to_delete += 1 
        end 
    end 
    puts letters_to_delete 
end
test_cases = gets.strip.to_i 
test_cases.times do 
    string = gets.strip
    make_string_alternate(string)
end 