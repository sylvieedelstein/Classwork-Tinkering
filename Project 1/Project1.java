//Sylvie Edelstein
//Software Development I
//This project uses given numbers to test the methods within the MyInteger class

public class Project1 {
    public static void main(String[] args) {
        
        //The testing value is 5
        MyInteger num = new MyInteger(5); 
        
        // Test for even, odd, and prime methods
        System.out.println("Is the number even? " + num.isEven()); 
        System.out.println("Is the number odd? " + num.isOdd()); 
        System.out.println("Is the number prime? " + num.isPrime()); 
        
        // Test for even, odd, and prime static methods
        System.out.println("Is 1 even? " + MyInteger.isEven(1));
        System.out.println("Is 2 odd? " + MyInteger.isOdd(2)); 
        System.out.println("Is 3 prime? " + MyInteger.isPrime(3)); 
        
        // Test for even, odd, and prime static methods with MyInteger. The given value is 4.
        MyInteger num1 = new MyInteger(4);
        System.out.println("Is the number even? " + MyInteger.isEven(num1)); 
        System.out.println("Is the number odd? " + MyInteger.isOdd(num1)); 
        System.out.println("Is the number prime? " + MyInteger.isPrime(num1)); 
        
        // Test equals methods
        System.out.println("Is the number equal to 4? " + num1.equals(4)); 
        
        //For the sake of this test, the two numbers are 4 and 5.
        System.out.println("Do the two numbers equal each other? " + num.equals(num1));
        
        // Test parseInt methods
        char[] numArray = {'1', '2', '3', '4'};
        int num2 = MyInteger.parseInt(numArray);
        System.out.println("Here is your number array: " + num2);
        
        String numString = "5678";
        int num3 = MyInteger.parseInt(numString);
        System.out.println("Here is your string of numbers: " + num3); 
    }
}
