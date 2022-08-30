# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Question1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

#VARIABLES TO USE

num1 = 7
num2 = 42
num3 = 221

def odds_even num
    if num % 2 == 0
    p 'Your number is eveb'
    elsif num % 2 != 0
     p   'Your number is odd '
     end
end
 odds_even num1
 odds_even num2
 odds_even num3

# Question 2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'


beatles_album1 = 'Rubber Soul'
get_vowels = beatles_album1.delete('aeiou', '')

def my_vowels param
  p  param.delete 'aeiouAEIOU'
end

my_vowels beatles_album1
my_vowels beatles_album2
my_vowels beatles_album3



#  Question3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindromeStrings string
  if string.downcase == string.reverse.downcase
    p 'is a palindrome'
  else
    p 'is not a palindrome'
  end
end

palindromeStrings palindrome_tester1
palindromeStrings palindrome_tester2
palindromeStrings palindrome_tester3