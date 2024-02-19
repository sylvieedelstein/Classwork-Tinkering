//This extra credit program calculates the area of a triangle with coordinates given in a matrix using the complex class!
import java.util.Scanner;

public class Extra {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        //Inputs for all x y coordinates for the three noncollinear points
        System.out.print("Enter the x and y coordinates of point z1: ");
        double x1 = input.nextDouble();
        double y1 = input.nextDouble();

        System.out.print("Enter the x and y coordinates of point z2: ");
        double x2 = input.nextDouble();
        double y2 = input.nextDouble();

        System.out.print("Enter the x and y coordinates of point z3: ");
        double x3 = input.nextDouble();
        double y3 = input.nextDouble();

        Complex z1 = new Complex(x1, y1);
        Complex z2 = new Complex(x2, y2);
        Complex z3 = new Complex(x3, y3);

        Complex a = z2.subtract(z1);
        Complex b = z3.subtract(z1);

        //This equation is for finding the determinant of a 3x3 matrix. It utilizes the already established imaginary and complex as well as conjugate. We then divide by 2 to get the signed area!
        double signedArea = a.multiply(b.conjugate()).getImaginaryPart() / 2;

        //Print!
        System.out.println("The area of the triangle with vertices " +
                "(" + x1 + ", " + y1 + "), " +
                "(" + x2 + ", " + y2 + "), and " +
                "(" + x3 + ", " + y3 + ") is " + signedArea);
    }
}
