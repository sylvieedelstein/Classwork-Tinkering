//Sylvie Edelstein
//Software Development I
//This class holds several methods that examine the values of numbers.

public class MyInteger {
    //int data field
    private int value;

    //constructor for MyInteger
    public MyInteger(int value) {
        this.value = value;
    }

    //getter
    public int getValue() {
        return value;
    }

    //The following methods check if a number is even, odd, and prime
    public boolean isEven() {
        return value % 2 == 0;
    }

    public boolean isOdd() {
        return value % 2 == 1;
    }

    public boolean isPrime() {
        if (value < 2) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(value); i++) {
            if (value % i == 0) {
                return false;
            }
        }
        return true;
    }

    //The following methods check if the given value is even, odd, and prime.
    public static boolean isEven(int value) {
        return value % 2 == 0;
    }

    public static boolean isOdd(int value) {
        return value % 2 == 1;
    }

    public static boolean isPrime(int value) {
        if (value < 2) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(value); i++) {
            if (value % i == 0) {
                return false;
            }
        }
        return true;
    }

    //The following methods check if the value myInteger within the MyInteger class is even, odd, or prime.
    public static boolean isEven(MyInteger myInteger) {
        return myInteger.isEven();
    }

    public static boolean isOdd(MyInteger myInteger) {
        return myInteger.isOdd();
    }

    public static boolean isPrime(MyInteger myInteger) {
        return myInteger.isPrime();
    }

    //Methods to check if the value in the object and specified value are equal
    public boolean equals(int value) {
        return this.value == value;
    }

    public boolean equals(MyInteger myInteger) {
        return this.value == myInteger.getValue();
    }

    //Static method to convert characters into an array
    public static int parseInt(char[] chars) { 
        int result = 0; 
        for (int i = 0; i < chars.length; i++) {
            result = result * 10 + (chars[i] - '0');
        }
        return result;
    }

    //Static method to convert a string into an int
    public static int parseInt(String s) {
        return parseInt(s.toCharArray());
    }
}
