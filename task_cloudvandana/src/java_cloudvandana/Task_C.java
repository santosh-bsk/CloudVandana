package java_cloudvandana;
import java.util.Scanner;

public class Task_C {
	
	    public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);
	        System.out.print("Enter a sentence: ");
	        String sentence = scanner.nextLine().toLowerCase();

	        boolean[] alphabet = new boolean[26];

	        for (int i = 0; i < sentence.length(); i++) {
	            char c = sentence.charAt(i);
	            if (c >= 'a' && c <= 'z') {
	                alphabet[c - 'a'] = true;
	            }
	        }

	        boolean isPangram = true;
	        for (boolean letter : alphabet) {
	            if (!letter) {
	                isPangram = false;
	                break;
	            }
	        }

	        if (isPangram) {
	            System.out.println(sentence + " is a pangram.");
	        } else {
	            System.out.println(sentence + " is not a pangram.");
	        }
	    }
	}

