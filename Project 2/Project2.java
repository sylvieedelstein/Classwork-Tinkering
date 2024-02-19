import java.util.Scanner;
import Complex;

public class Project2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        //Complex Number 1
        System.out.print("Please enter a complex number (a + bi): ");
        double a1 = input.nextDouble();
        double b1 = input.nextDouble();

        //Complex Number 2
        System.out.print("Please enter another complex number (a + bi): ");
        double a2 = input.nextDouble();
        double b2 = input.nextDouble();

        Complex c1 = new Complex(a1, b1);
        Complex c2 = new Complex(a2, b2);

        //Print statements for all operations
        System.out.println("(" + c1 + ") + (" + c2 + ") = " + c1.add(c2));
        System.out.println("(" + c1 + ") - (" + c2 + ") = " + c1.subtract(c2));
        System.out.println("(" + c1 + ") * (" + c2 + ") = " + c1.multiply(c2));
        System.out.println("(" + c1 + ") / (" + c2 + ") = " + c1.divide(c2));
        System.out.println("|(" + c1 + ") + (" + c2 + ")| = " + c1.add(c2).abs());
    }
}

