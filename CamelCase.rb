s = gets.strip
words_in_string = 1 
s.split("").each do |letter|
    if letter == letter.upcase  
        words_in_string += 1 
    end 
end 
puts words_in_string 