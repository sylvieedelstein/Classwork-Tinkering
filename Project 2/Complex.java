//Sylvie Edelstein
//Software Development I
//Project 2
//This project experiments with calculations using complex numbers.

//This program implements both Cloneable and Comparable interfaces
public class Complex implements Cloneable, Comparable<Complex> {
    
    //These variables establish the two distinct portions of the complex number.
    private double real;
    private double imaginary;

    //Complex constructors
    public Complex(double a, double b) {
        this.real = a;
        this.imaginary = b;
    }

    public Complex(double a) {
        this(a, 0);
    }

    public Complex() {
        this(0, 0);
    }

    //These are my add, subtract, multiply, divide, and absolute value operations
    public Complex add(Complex complex2) {
        return new Complex(this.real + complex2.real, this.imaginary + complex2.imaginary);
    }

    public Complex subtract(Complex complex2) {
        return new Complex(this.real - complex2.real, this.imaginary - complex2.imaginary);
    }

    public Complex multiply(Complex complex2) {
        double real = this.real * complex2.real - this.imaginary * complex2.imaginary;
        double imaginary = this.real * complex2.imaginary + this.imaginary * complex2.real;
        return new Complex(real, imaginary);
    }

    public Complex divide(Complex complex2) {
        double denominator = complex2.real * complex2.real + complex2.imaginary * complex2.imaginary;
        double real = (this.real * complex2.real + this.imaginary * complex2.imaginary) / denominator;
        double imaginary = (this.imaginary * complex2.real - this.real * complex2.imaginary) / denominator;
        return new Complex(real, imaginary);
    }

    public double abs() {
        return Math.sqrt(real * real + imaginary * imaginary);
    }

    //Methods for returning real and imaginary
    public double getRealPart() {
        return real;
    }

    public double getImaginaryPart() {
        return imaginary;
    }

    //Conjugate is defined here to connect complex to the Extra class
    public Complex conjugate() {
        return new Complex(this.real, - this.imaginary);
    }

    //toString for string representation of complex number
    @Override
    public String toString() {
        if (imaginary == 0) {
            return real + "";
        } else if (real == 0) {
            return imaginary + "i";
        } else {
            return real + " " + (imaginary > 0 ? "+" : "-") + " " + Math.abs(imaginary) + "i";
        }
    }

    //Clone
    @Override
    public Complex clone() {
        return new Complex(this.real, this.imaginary);
    }

    //Comparable
    @Override
    public int compareTo(Complex other) {
        double difference = this.abs() - other.abs();
        if (difference < 0) {
            return -1;
        } else if (difference > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}


