# Beale-Cipher
beale cipher encryption and decryption algorithms

## Brief History about the Beale Cipher
* Thomas Beale lived in the USA in the 1800’s and is said to have buried a treasure in an undisclosed location.
* Thomas Beale encrypted text documents that is said to contain where this treasure is(this why theres name association).
* Thomas encrypted 3 documents, in which  one of them was cracked, revealing the content of the treasure. The two other remain a secret.
* Personally, this combines a few of my favorite hobbies...TREASURES AND CRYPTOLOGY..who doesn’t like that, right?

## The Method Behind The Madness:
* The encryption process requires:
1. Plain text which you would like to encrypt.
2. A random book or a text document.

* I assume you are already familiar with cryptography and cryptanalysis so I won’t go into details , so if you want to learn more about cryptology, I recommend reading this amazing book [crypto book](https://www.amazon.ca/Code-Book-Science-Secrecy-Cryptography/dp/0385495323)

* Now back to business, to encrypt using the Beale Cipher:
1. Open your random book(or text document), and start numbering each word.
2. Once you’re done, start gradually converting every letter in your plain text document,with the numbers starting from the the beginning of the the random book (also called source book), by finding the word where the first letter in the word of the source book, matches the letter you want to encrypt in the plain text document.
3. repeat the process for all letters in the plain text.

* example:
1.  I have a document which has one word in it, it is “fun”.
2.  I have a source book, and the first page has a paragraph that goes as follows:   
```
The sun is undeniably beautiful at this hour.    
I had fun today. Next time, it will be even better.
```
3. If I number the source book, it will look as follows:    
```
1The 2sun 3is 4undeniably 5beautiful 6at 7this 8hour.    
9I 10had 11fun 12today. 13Next 14time, 15it 16will 17be 18even 19better.
```
4. Now to encrypt my plain text, which only has one word in it “fun”, I will find the words which begin with a letter that matches my plain text word letters, and replace them with the matching numbers:
5. fun => 11,4,13

VOILA!


## In Progress:
* currently working on completing the cipher to be a polyalphabetical one which is the essence of the beal cipher.
