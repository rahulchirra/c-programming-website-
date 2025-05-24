
import { LearningModule, ModuleLevel } from './types';
// Removed icon imports: GettingStartedIcon, VariablesIcon, ControlFlowIcon, FunctionsIcon, ArraysStringsIcon, PointersIcon, ExpertIcon

// Helper function to conditionally add #include <stdio.h>
const ensureStdioIncluded = (code: string, forceInclude: boolean = false): string => {
  const stdioFunctions = /\b(printf|scanf|puts|gets|getchar|putchar|sprintf|sscanf|fopen|fclose|fread|fwrite|fseek|ftell|rewind|fprintf|fscanf|fgets|fputs|feof|ferror|perror|remove|rename|tmpfile|tmpnam|setbuf|setvbuf|fflush|freopen|clearerr)\b/;
  const needsStdio = stdioFunctions.test(code) || forceInclude;
  const hasStdio = /^\s*#\s*include\s*<stdio\.h>/m.test(code);

  if (needsStdio && !hasStdio) {
    // Add a newline if the code doesn't start with a comment or another include, and isn't empty
    const prefix = (code.trim() === '' || /^\s*(#|\/\/|\/\*)/.test(code)) ? "" : "\n";
    return `#include <stdio.h>\n${prefix}${code}`;
  }
  return code;
};


export const learningModules: LearningModule[] = [
  {
    id: "module-1",
    title: "Getting Started with C",
    level: ModuleLevel.BEGINNER,
    tagline: "Your first steps into the world of C programming.",
    // icon: GettingStartedIcon, // Removed
    description: "Lay the groundwork for your C programming journey. Understand the basics, set up your environment, and write your first C program.",
    expertInsight: "The journey of a thousand lines of code begins with a single 'Hello, World!'. Master this, and you're on your way.",
    topics: [
      {
        id: "1-1",
        name: "What is C?",
        explanation: "C is a powerful, general-purpose programming language developed in the early 1970s by Dennis Ritchie at Bell Labs. It's known for its efficiency, low-level memory access, and influence on many other languages. It's a structured, procedural language, meaning programs are built from functions and blocks of code.",
        codeExamples: [
          {
            title: "Basic C Program Structure",
            code: ensureStdioIncluded(
`// Preprocessor directive
#include <stdio.h>

// Main function - entry point
int main() {
    // Statement
    printf("This is a statement.\\n");
    
    // Return statement
    return 0; 
}`),
            explanation: "Illustrates the fundamental parts: preprocessor directives, the main function, statements, and a return value indicating success.",
            output: "This is a statement."
          },
          {
            title: "Comments in C",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    // This is a single-line comment
    printf("Hello after single-line comment!\\n");

    /* This is a
       multi-line comment.
       It can span several lines. */
    printf("Hello after multi-line comment!\\n");
    return 0;
}`),
            explanation: "C supports single-line comments (starting with `//`) and multi-line comments (enclosed in `/* ... */`). Comments are ignored by the compiler and are used for explaining code.",
            output: "Hello after single-line comment!\nHello after multi-line comment!"
          },
          {
            title: "Case Sensitivity",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int myVariable = 10;
    // int myvariable = 20; // This would be a different variable
    // PRINTF("Hello\\n"); // This would cause a compile error, printf is lowercase

    printf("myVariable = %d\\n", myVariable);
    return 0;
}`),
            explanation: "C is case-sensitive. `myVariable` and `myvariable` would be treated as two different variables. Keywords and standard library function names (like `printf`) must be in their correct case (usually lowercase).",
            output: "myVariable = 10"
          },
          {
            title: "C is Free-Form (but indentation is good practice)",
            code: ensureStdioIncluded(
`#include <stdio.h>
int main() { int x=5; printf("x is %d\\n", x); return 0; }`),
            explanation: "C allows statements to be written without strict formatting rules regarding whitespace (spaces, tabs, newlines) between tokens. However, proper indentation and spacing make code much more readable and maintainable.",
            output: "x is 5"
          },
          {
            title: "Simple Preprocessor Directive: #define",
            code: ensureStdioIncluded(
`#include <stdio.h>
#define PI 3.14159

int main() {
    printf("The value of PI is approximately %f\\n", PI);
    // PI = 3.14; // Error: PI is a constant defined by the preprocessor
    return 0;
}`),
            explanation: "`#define` is a preprocessor directive used to create macros. Here, it defines `PI` as a constant. The preprocessor replaces all occurrences of `PI` with `3.14159` before compilation.",
            output: "The value of PI is approximately 3.141590"
          },
          {
            title: "Concept of Compilation",
            code: ensureStdioIncluded(
`// Source Code (my_program.c)
#include <stdio.h>
int main() {
    printf("C is compiled!\\n");
    return 0;
}

// Compilation Step (conceptual, command line)
// gcc my_program.c -o my_program_executable

// Execution Step (conceptual, command line)
// ./my_program_executable`),
            explanation: "C code is first written as human-readable source code. A compiler then translates this source code into machine code (an executable file) that the computer's processor can understand and run.",
            output: "(If compiled and run) C is compiled!"
          }
        ],
      },
      {
        id: "1-2",
        name: "Setting Up Your Environment",
        explanation: "To compile and run C programs, you need a C compiler (like GCC or Clang) and a text editor or an Integrated Development Environment (IDE) like VS Code, Code::Blocks, or CLion. For GCC on Windows, MinGW or WSL are popular choices. On macOS, Xcode Command Line Tools include Clang. On Linux, GCC is often pre-installed or easily installable via package managers.",
        codeExamples: [
          {
            title: "Checking GCC version (Terminal/Command Prompt)",
            code: "gcc --version",
            explanation: "This command checks if GCC (GNU Compiler Collection) is installed and displays its version."
          },
          {
            title: "Checking Clang version (Terminal/Command Prompt)",
            code: "clang --version",
            explanation: "Similar to GCC, this checks for Clang compiler and its version. Often used on macOS."
          },
          {
            title: "Basic Compilation Command (GCC)",
            code: "gcc sourcefile.c",
            explanation: "Compiles `sourcefile.c`. If successful, it creates an executable file named `a.out` (on Linux/macOS) or `a.exe` (on Windows with MinGW)."
          },
          {
            title: "Compilation with Output File Naming (GCC)",
            code: "gcc sourcefile.c -o outputfile",
            explanation: "Compiles `sourcefile.c` and names the executable `outputfile` (or `outputfile.exe` on Windows)."
          },
          {
            title: "Compiling with All Warnings Enabled (GCC/Clang)",
            code: "gcc -Wall sourcefile.c -o outputfile",
            explanation: "`-Wall` enables most common compiler warnings. It's highly recommended to use this to catch potential issues in your code.",
            output: "(Compiler messages, if any warnings or errors)"
          },
          {
            title: "Conceptual Steps for using an IDE (e.g., VS Code)",
            code:
`1. Install VS Code.
2. Install a C/C++ extension (e.g., Microsoft's C/C++ extension).
3. Install a C compiler (GCC via MinGW on Windows, or from system package manager on Linux/macOS).
4. Configure the IDE to use your compiler (often involves setting up a 'tasks.json' for building and 'launch.json' for debugging).
5. Create a .c file, write code, build, and run/debug within the IDE.`,
            explanation: "IDEs provide a more integrated experience with features like code editing, building, debugging, and version control integration."
          }
        ],
      },
      {
        id: "1-3",
        name: "Your First C Program: Hello, World!",
        explanation: "The classic 'Hello, World!' program is a simple way to verify your setup and understand basic C program structure. It includes the standard input/output library and uses the `printf` function to display text.",
        codeExamples: [
          {
            title: "hello_world.c",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`),
            explanation: "`#include <stdio.h>` includes the standard input/output library. `main()` is the entry point of every C program. `printf()` is used for output. `\\n` is a newline character. `return 0;` indicates successful execution.",
            output: "Hello, World!"
          },
          {
            title: "Compiling and Running (using GCC)",
            code:
`# Compile the code
gcc hello_world.c -o hello_world

# Run the executable (Linux/macOS)
./hello_world

# Run the executable (Windows, if compiled with MinGW)
hello_world.exe`,
            explanation: "The first command compiles `hello_world.c` and creates an executable file named `hello_world`. The second command runs this executable."
          },
          {
            title: "Printing Multiple Lines",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    printf("Hello, C Programmer!\\n");
    printf("Welcome to the world of C.\\n");
    printf("Let's start coding!\\n");
    return 0;
}`),
            explanation: "You can use multiple `printf` statements or include multiple `\\n` newline characters in a single `printf` to print on several lines.",
            output: "Hello, C Programmer!\nWelcome to the world of C.\nLet's start coding!"
          },
          {
            title: "Using puts() for Simple String Output",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    puts("Hello, World using puts()!");
    puts("This also adds a newline automatically.");
    return 0;
}`),
            explanation: "`puts()` is another function from `<stdio.h>` used to print a string to the console. It automatically appends a newline character at the end of the string.",
            output: "Hello, World using puts()!\nThis also adds a newline automatically."
          },
          {
            title: "Explaining 'int main(void)'",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main(void) { // 'void' explicitly means no arguments
    printf("Main function with (void).\\n");
    return 0; // Indicates successful execution
}`),
            explanation: "`int main(void)` signifies that the `main` function returns an integer and takes no arguments. `return 0;` signals to the operating system that the program executed successfully. Other return values often indicate an error.",
            output: "Main function with (void)."
          },
          {
            title: "A slightly more interactive 'Hello'",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    char name[50]; // Declare a character array to store the name
    printf("Enter your name: ");
    scanf("%49s", name); // Read input from the user (safer scanf)
    printf("Hello, %s!\\n", name);
    return 0;
}`),
            explanation: "This program prompts the user for their name and then greets them. `scanf` is used for input. Using `%49s` helps prevent buffer overflows with `name[50]`.",
            output: "(User enters 'Ada')\nEnter your name: Ada\nHello, Ada!"
          }
        ]
      }
    ]
  },
  {
    id: "module-2",
    title: "Variables, Data Types, and Operators",
    level: ModuleLevel.BEGINNER,
    tagline: "Storing and manipulating data in C.",
    // icon: VariablesIcon, // Removed
    description: "Learn how to store and manipulate data in C using variables, understand different data types, and perform operations using various operators.",
    expertInsight: "Understanding data types is crucial for memory efficiency and preventing bugs. C gives you control, but with control comes responsibility.",
    topics: [
      {
        id: "2-1",
        name: "Variables and Constants",
        explanation: "Variables are named memory locations used to store data that can change during program execution. Constants are fixed values that do not change. C requires you to declare a variable's type before using it.",
        codeExamples: [
          {
            title: "Declaring and Initializing Variables",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int age = 30;              // Integer variable
    float price = 19.99f;      // Floating-point variable (note the 'f' suffix)
    char grade = 'A';          // Character variable
    
    printf("Age: %d\\n", age);
    printf("Price: %.2f\\n", price); // %.2f prints float with 2 decimal places
    printf("Grade: %c\\n", grade);

    age = 31; // Value of 'age' can be changed
    printf("New Age: %d\\n", age);

    return 0;
}`),
            output:
`Age: 30
Price: 19.99
Grade: A
New Age: 31`
          },
          {
            title: "Using 'const' Keyword for Constants",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    const double PI = 3.1415926535;
    const int MAX_USERS = 100;

    printf("PI: %lf\\n", PI);
    printf("Max Users: %d\\n", MAX_USERS);

    // PI = 3.14; // This would cause a compile-time error
    // MAX_USERS = 200; // Also a compile-time error

    return 0;
}`),
            explanation: "The `const` keyword declares a variable whose value cannot be changed after initialization. Attempting to modify a `const` variable results in a compilation error.",
            output:
`PI: 3.141593
Max Users: 100`
          },
          {
            title: "Using #define for Symbolic Constants (Preprocessor)",
            code: ensureStdioIncluded(
`#include <stdio.h>

#define SECONDS_PER_MINUTE 60
#define GREETING "Welcome"

int main() {
    int minutes = 5;
    int totalSeconds = minutes * SECONDS_PER_MINUTE;

    printf("%s! %d minutes is %d seconds.\\n", GREETING, minutes, totalSeconds);
    
    // GREETING = "Hello"; // Error: GREETING is a preprocessor macro, not a variable
    return 0;
}`),
            explanation: "`#define` is a preprocessor directive that replaces text. It's an older way to define constants. Unlike `const` variables, `#define` macros don't have a data type in the C sense and are simply text substitutions.",
            output: "Welcome! 5 minutes is 300 seconds."
          },
          {
            title: "Multiple Declarations",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int x, y, z; // Declare three integer variables
    x = 10;
    y = 20;
    z = x + y;

    double price = 15.75, discount = 0.1; // Declare and initialize

    printf("x=%d, y=%d, z=%d\\n", x, y, z);
    printf("Price: %.2f, Discount: %.2f\\n", price, discount);
    return 0;
}`),
            explanation: "You can declare multiple variables of the same type in a single statement, separated by commas. You can also initialize them during declaration.",
            output: "x=10, y=20, z=30\nPrice: 15.75, Discount: 0.10"
          },
          {
            title: "Variable Scope (Simple Block Scope)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int outerVar = 100;

    if (outerVar > 50) {
        int innerVar = 20; // innerVar is only visible inside this if-block
        printf("Inside block: outerVar = %d, innerVar = %d\\n", outerVar, innerVar);
    }

    // printf("innerVar = %d\\n", innerVar); // This would cause a compile error: innerVar not declared in this scope
    printf("Outside block: outerVar = %d\\n", outerVar);
    return 0;
}`),
            explanation: "A variable's scope defines where it can be accessed. Variables declared inside a block (e.g., within `{}`) are local to that block.",
            output: "Inside block: outerVar = 100, innerVar = 20\nOutside block: outerVar = 100"
          },
          {
            title: "Uninitialized Variables (Caution!)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int uninitialized_var;
    // The value of uninitialized_var is indeterminate (garbage value)
    // Accessing it before assignment leads to undefined behavior.
    
    // printf("Uninitialized: %d\\n", uninitialized_var); // DANGEROUS!

    uninitialized_var = 50; // Now it's initialized
    printf("Initialized: %d\\n", uninitialized_var);
    return 0;
}`),
            explanation: "If a variable is declared but not assigned a value, its content is unpredictable ('garbage value'). Using an uninitialized variable can lead to bugs that are hard to trace. Always initialize variables before use.",
            output: "Initialized: 50"
          }
        ],
      },
      {
        id: "2-2",
        name: "Basic Data Types",
        explanation: "C offers several fundamental data types: `int` (integers), `float` (single-precision floating-point), `double` (double-precision floating-point), `char` (single characters), and `void` (represents the absence of type). Modifiers like `short`, `long`, `signed`, and `unsigned` can alter these basic types.",
        codeExamples: [
          {
            title: "Size of Data Types (using sizeof)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    printf("Size of char: %zu byte\\n", sizeof(char));
    printf("Size of short: %zu bytes\\n", sizeof(short));
    printf("Size of int: %zu bytes\\n", sizeof(int));
    printf("Size of long: %zu bytes\\n", sizeof(long));
    printf("Size of long long: %zu bytes\\n", sizeof(long long));
    printf("Size of float: %zu bytes\\n", sizeof(float));
    printf("Size of double: %zu bytes\\n", sizeof(double));
    printf("Size of long double: %zu bytes\\n", sizeof(long double));
    // %zu is the format specifier for sizeof operator's return type (size_t)
    return 0;
}`),
            explanation: "`sizeof` operator returns the size of a data type or variable in bytes. Sizes can vary depending on the system architecture and compiler, but `sizeof(char)` is always 1.",
            output: "(Output varies by system, e.g.)\nSize of char: 1 byte\nSize of short: 2 bytes\nSize of int: 4 bytes\nSize of long: 8 bytes\nSize of long long: 8 bytes\nSize of float: 4 bytes\nSize of double: 8 bytes\nSize of long double: 16 bytes"
          },
          {
            title: "Integer Types (short, int, long, long long)",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <limits.h> // For SHRT_MIN, INT_MAX etc.

int main() {
    short s_num = 32767;            // Max value for a 16-bit short
    int i_num = 2147483647;       // Max value for a 32-bit int
    long l_num = 9223372036854775807L; // Requires L suffix for long constants
    long long ll_num = 9223372036854775807LL; // Requires LL suffix

    printf("Short: %hd (Min: %hd, Max: %hd)\\n", s_num, SHRT_MIN, SHRT_MAX);
    printf("Int: %d (Min: %d, Max: %d)\\n", i_num, INT_MIN, INT_MAX);
    // Use %ld for long, %lld for long long
    printf("Long: %ld (Min: %ld, Max: %ld)\\n", l_num, LONG_MIN, LONG_MAX);
    printf("Long Long: %lld (Min: %lld, Max: %lld)\\n", ll_num, LLONG_MIN, LLONG_MAX);
    return 0;
}`),
            explanation: "Integer types store whole numbers. Modifiers `short`, `long`, `long long` affect the range of values they can hold. The `<limits.h>` header provides constants for these ranges.",
            output: "(Max/Min values depend on system architecture, illustrative output for typical sizes)\nShort: 32767 (Min: -32768, Max: 32767)\nInt: 2147483647 (Min: -2147483648, Max: 2147483647)\nLong: 9223372036854775807 (Min: -9223372036854775808, Max: 9223372036854775807)\nLong Long: 9223372036854775807 (Min: -9223372036854775808, Max: 9223372036854775807)"
          },
          {
            title: "Unsigned Integer Types",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <limits.h> // For UINT_MAX etc.

int main() {
    unsigned int ui_num = 4294967295U; // U suffix for unsigned
    unsigned short us_num = 65535U;
    unsigned long ul_num = 18446744073709551615UL; // UL suffix

    printf("Unsigned Int: %u (Max: %u)\\n", ui_num, UINT_MAX);
    printf("Unsigned Short: %hu (Max: %hu)\\n", us_num, USHRT_MAX);
    printf("Unsigned Long: %lu (Max: %lu)\\n", ul_num, ULONG_MAX);
    return 0;
}`),
            explanation: "Unsigned types can only store non-negative values, effectively doubling the maximum positive value compared to their signed counterparts.",
            output: "(Max values depend on system, illustrative)\nUnsigned Int: 4294967295 (Max: 4294967295)\nUnsigned Short: 65535 (Max: 65535)\nUnsigned Long: 18446744073709551615 (Max: 18446744073709551615)"
          },
          {
            title: "Character Type (char) and ASCII values",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    char c1 = 'A';
    char c2 = 66; // ASCII value for 'B'

    printf("Character c1: %c, ASCII value: %d\\n", c1, c1);
    printf("Character c2: %c, ASCII value: %d\\n", c2, c2);

    char c3 = c1 + 3; // 'A' + 3 = 'D'
    printf("Character c3 ('A' + 3): %c, ASCII value: %d\\n", c3, c3);
    return 0;
}`),
            explanation: "`char` stores a single character. Internally, characters are often represented by their ASCII (or UTF-8) numerical values, allowing for arithmetic operations.",
            output:
`Character c1: A, ASCII value: 65
Character c2: B, ASCII value: 66
Character c3 ('A' + 3): D, ASCII value: 68`
          },
          {
            title: "Floating-Point Types (float, double, long double)",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <float.h> // For FLT_DIG, DBL_DIG etc.

int main() {
    float f_num = 3.1415926535f;    // 'f' suffix is important for float literals
    double d_num = 3.141592653589793;
    long double ld_num = 3.14159265358979323846L; // 'L' suffix

    printf("Float: %.10f (Digits of precision: ~%d)\\n", f_num, FLT_DIG);
    printf("Double: %.15lf (Digits of precision: ~%d)\\n", d_num, DBL_DIG);
    printf("Long Double: %.20Lf (Digits of precision: ~%d)\\n", ld_num, LDBL_DIG);
    return 0;
}`),
            explanation: "Floating-point types store numbers with decimal points. `double` offers more precision than `float`. `long double` can offer even more. Precision details are in `<float.h>`.",
            output:
`(Output shows typical precision)
Float: 3.1415927410 (Digits of precision: ~6)
Double: 3.141592653589793 (Digits of precision: ~15)
Long Double: 3.14159265358979323846 (Digits of precision: ~18)`
          },
          {
            title: "Type Casting (Implicit and Explicit)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int i = 10;
    double d = 5.5;
    char c = 'X';

    // Implicit conversion: int to double
    double result1 = i / 3.0; // i is promoted to double for division
    printf("Implicit (int to double for division): 10 / 3.0 = %f\\n", result1);

    // Explicit conversion: double to int (truncation)
    int result2 = (int)d;
    printf("Explicit (double to int): (int)5.5 = %d\\n", result2);

    // Explicit conversion: int to char (lower bits kept)
    char result3 = (char) (i + 60); // 10 + 60 = 70, ASCII for 'F'
    printf("Explicit (int to char): (char)(10+60) = %c\\n", result3);
    
    int num1 = 5, num2 = 2;
    double average = (double)num1 / num2; // Cast one operand to double for float division
    printf("Average of %d and %d: %f\\n", num1, num2, average);

    return 0;
}`),
            explanation: "Type casting converts a value from one data type to another. Implicit conversion happens automatically by the compiler. Explicit conversion is done by the programmer using the `(type_name)` operator.",
            output:
`Implicit (int to double for division): 10 / 3.0 = 3.333333
Explicit (double to int): (int)5.5 = 5
Explicit (int to char): (char)(10+60) = F
Average of 5 and 2: 2.500000`
          }
        ],
      },
      {
        id: "2-3",
        name: "Operators",
        explanation: "Operators are symbols that perform operations on variables and values. C includes arithmetic (`+`, `-`, `*`, `/`, `%`), relational (`==`, `!=`, `>`, `<`, `>=`, `<=`), logical (`&&`, `||`, `!`), bitwise (`&`, `|`, `^`, `~`, `<<`, `>>`), assignment (`=`, `+=`, `-=`, etc.), and miscellaneous operators (like `sizeof`, ternary `?:`).",
        codeExamples: [
          {
            title: "Arithmetic and Relational Operators",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int a = 10, b = 4;
    printf("a = %d, b = %d\\n", a, b);
    printf("Sum (a + b): %d\\n", a + b);
    printf("Difference (a - b): %d\\n", a - b);
    printf("Product (a * b): %d\\n", a * b);
    printf("Quotient (a / b): %d (Integer division)\\n", a / b);
    printf("Remainder (a %% b): %d\\n", a % b); // Note %% to print %

    printf("\\nRelational Operators:\\n");
    printf("Is a > b? %d (1=true, 0=false)\\n", a > b);
    printf("Is a < b? %d\\n", a < b);
    printf("Is a == b? %d\\n", a == b);
    printf("Is a != b? %d\\n", a != b);
    printf("Is a >= 10? %d\\n", a >= 10);
    printf("Is b <= 3? %d\\n", b <= 3);

    return 0;
}`),
            output:
`a = 10, b = 4
Sum (a + b): 14
Difference (a - b): 6
Product (a * b): 40
Quotient (a / b): 2 (Integer division)
Remainder (a % b): 2

Relational Operators:
Is a > b? 1 (1=true, 0=false)
Is a < b? 0
Is a == b? 0
Is a != b? 1
Is a >= 10? 1
Is b <= 3? 0`
          },
          {
            title: "Logical Operators (&&, ||, !)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int age = 25;
    int hasLicense = 1; // 1 for true, 0 for false

    // Logical AND (&&)
    if (age >= 18 && hasLicense == 1) {
        printf("Can drive legally.\\n");
    } else {
        printf("Cannot drive legally.\\n");
    }

    int isWeekend = 0;
    int isHoliday = 1;
    // Logical OR (||)
    if (isWeekend == 1 || isHoliday == 1) {
        printf("It's a day off!\\n");
    } else {
        printf("It's a working day.\\n");
    }

    // Logical NOT (!)
    int isRaining = 0;
    if (!isRaining) { // if isRaining is false
        printf("It's not raining, good weather!\\n");
    }
    return 0;
}`),
            output:
`Can drive legally.
It's a day off!
It's not raining, good weather!`
          },
          {
            title: "Increment/Decrement Operators (++, --)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int x = 5;
    int y;

    // Postfix increment: x is used, then incremented
    y = x++; 
    printf("Postfix: x = %d, y = %d\\n", x, y); // x will be 6, y will be 5

    // Reset x
    x = 5;
    // Prefix increment: x is incremented, then used
    y = ++x;
    printf("Prefix: x = %d, y = %d\\n", x, y); // x will be 6, y will be 6

    int a = 10;
    // Postfix decrement
    printf("Initial a: %d\\n", a);
    printf("a--: %d\\n", a--); // Uses 10, then a becomes 9
    printf("After a--: %d\\n", a); // a is 9

    // Prefix decrement
    printf("--a: %d\\n", --a); // a becomes 8, then uses 8
    printf("After --a: %d\\n", a); // a is 8
    return 0;
}`),
            output:
`Postfix: x = 6, y = 5
Prefix: x = 6, y = 6
Initial a: 10
a--: 10
After a--: 9
--a: 8
After --a: 8`
          },
          {
            title: "Assignment Operators (=, +=, -=, *=, /=, %=)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int num = 10;
    printf("Initial num: %d\\n", num);

    num += 5; // Equivalent to: num = num + 5;
    printf("After += 5: %d\\n", num); // num is 15

    num -= 3; // Equivalent to: num = num - 3;
    printf("After -= 3: %d\\n", num); // num is 12

    num *= 2; // Equivalent to: num = num * 2;
    printf("After *= 2: %d\\n", num); // num is 24

    num /= 4; // Equivalent to: num = num / 4;
    printf("After /= 4: %d\\n", num); // num is 6

    num %= 5; // Equivalent to: num = num % 5;
    printf("After %%= 5: %d\\n", num); // num is 1
    return 0;
}`),
            output:
`Initial num: 10
After += 5: 15
After -= 3: 12
After *= 2: 24
After /= 4: 6
After %= 5: 1`
          },
          {
            title: "Bitwise Operators (&, |, ^, ~, <<, >>)",
            code: ensureStdioIncluded(
`#include <stdio.h>

// Helper function to print binary (not standard C, for illustration)
void print_binary(unsigned char val) {
    for (int i = 7; i >= 0; i--) {
        putchar((val & (1 << i)) ? '1' : '0');
    }
}

int main() {
    unsigned char a = 5;  // Binary: 00000101
    unsigned char b = 12; // Binary: 00001100

    printf("a = %u (", a); print_binary(a); printf("), b = %u (", b); print_binary(b); printf(")\\n");
    
    unsigned char res_and = a & b;
    printf("a & b = %u (Binary: ", res_and); print_binary(res_and); printf(")\\n"); // Result: 00000100 (4)
    
    unsigned char res_or = a | b;
    printf("a | b = %u (Binary: ", res_or); print_binary(res_or); printf(")\\n"); // Result: 00001101 (13)
    
    unsigned char res_xor = a ^ b;
    printf("a ^ b = %u (Binary: ", res_xor); print_binary(res_xor); printf(")\\n"); // Result: 00001001 (9)
    
    unsigned char res_not_a = ~a;
    printf("~a = %u (Binary: ", res_not_a); print_binary(res_not_a); printf(")\\n"); // For 8-bit char: 11111010 (250)
    
    unsigned char res_left_shift = a << 2;
    printf("a << 2 = %u (Binary: ", res_left_shift); print_binary(res_left_shift); printf(")\\n"); // 00010100 (20)
    
    unsigned char res_right_shift = b >> 1;
    printf("b >> 1 = %u (Binary: ", res_right_shift); print_binary(res_right_shift); printf(")\\n"); // 00000110 (6)
    
    return 0;
}`),
            explanation: "Bitwise operators perform operations on individual bits of data. The binary representations are illustrative for an 8-bit unsigned char. A helper function is used for binary printing as standard `printf` doesn't support `%b` portably.",
            output:
`a = 5 (00000101), b = 12 (00001100)
a & b = 4 (Binary: 00000100)
a | b = 13 (Binary: 00001101)
a ^ b = 9 (Binary: 00001001)
~a = 250 (Binary: 11111010)
a << 2 = 20 (Binary: 00010100)
b >> 1 = 6 (Binary: 00000110)`
          },
          {
            title: "Ternary Operator (?:)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int x = 10, y = 20;
    int max_val;

    // condition ? value_if_true : value_if_false;
    max_val = (x > y) ? x : y;
    printf("The maximum of %d and %d is %d\\n", x, y, max_val);

    int score = 75;
    char grade_status;
    grade_status = (score >= 60) ? 'P' : 'F'; // P for Pass, F for Fail
    printf("Score: %d, Status: %c\\n", score, grade_status);
    return 0;
}`),
            explanation: "The ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, a value if the condition is true, and a value if the condition is false.",
            output:
`The maximum of 10 and 20 is 20
Score: 75, Status: P`
          }
        ]
      }
    ]
  },
  {
    id: "module-3",
    title: "Control Flow: Making Decisions and Looping",
    level: ModuleLevel.BEGINNER,
    tagline: "Directing the execution path of your code.",
    // icon: ControlFlowIcon, // Removed
    description: "Control the execution path of your programs. Learn to make decisions with if-else statements and switch cases, and repeat tasks using for, while, and do-while loops.",
    expertInsight: "Mastering control flow is like learning to navigate. Without it, your program just goes in a straight line; with it, it can explore complex logic.",
    topics: [
      {
        id: "3-1",
        name: "Conditional Statements: if, else if, else",
        explanation: "`if` statements execute a block of code if a condition is true. `else if` provides alternative conditions, and `else` executes if no preceding conditions are true.",
        codeExamples: [
          {
            title: "Grading System Example",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int score = 85;
    printf("Score: %d\\n", score);

    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 80) {
        printf("Grade: B\\n");
    } else if (score >= 70) {
        printf("Grade: C\\n");
    } else if (score >= 60) {
        printf("Grade: D\\n");
    } else {
        printf("Grade: F\\n");
    }
    return 0;
}`),
            output: "Score: 85\nGrade: B"
          },
          {
            title: "Simple 'if' Statement (Positive Number Check)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int number = 10;
    if (number > 0) {
        printf("%d is a positive number.\\n", number);
    }
    number = -5;
    if (number > 0) { // This condition will be false
        printf("%d is a positive number.\\n", number);
    } else {
        printf("%d is not positive (or check failed).\\n", number);
    }
    return 0;
}`),
            output: "10 is a positive number.\n-5 is not positive (or check failed)."
          },
          {
            title: "'if-else' Statement (Even or Odd Check)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int num = 7;
    if (num % 2 == 0) {
        printf("%d is even.\\n", num);
    } else {
        printf("%d is odd.\\n", num);
    }
    return 0;
}`),
            output: "7 is odd."
          },
          {
            title: "Nested 'if' Statements",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int num = 15;
    if (num > 0) {
        printf("%d is positive.\\n", num);
        if (num % 2 == 0) {
            printf("%d is also even.\\n", num);
        } else {
            printf("%d is also odd.\\n", num);
        }
    } else if (num < 0) {
        printf("%d is negative.\\n", num);
    } else {
        printf("The number is zero.\\n");
    }
    return 0;
}`),
            output: "15 is positive.\n15 is also odd."
          },
          {
            title: "Using Boolean Expressions Directly in 'if'",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <stdbool.h> // For bool type (C99 and later)

int main() {
    bool isLoggedUser = true;
    bool isAdmin = false;

    if (isLoggedUser) {
        printf("User is logged in.\\n");
        if (isAdmin) {
            printf("User is an admin.\\n");
        } else {
            printf("User is not an admin.\\n");
        }
    } else {
        printf("User is not logged in.\\n");
    }
    return 0;
}`),
            explanation: "In C99 and later, `<stdbool.h>` provides `bool`, `true`, and `false`. Before C99, integers were used (0 for false, non-zero for true).",
            output: "User is logged in.\nUser is not an admin."
          },
          {
            title: "Checking a Range",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int age = 25;
    if (age >= 18 && age <= 65) {
        printf("Age %d is within the working age range (18-65).\\n", age);
    } else {
        printf("Age %d is outside the working age range (18-65).\\n", age);
    }
    return 0;
}`),
            output: "Age 25 is within the working age range (18-65)."
          }
        ]
      },
      {
        id: "3-2",
        name: "Switch Statement",
        explanation: "The `switch` statement provides an efficient way to select one of many code blocks to be executed based on the value of an expression (must be an integer or character type). Each `case` label represents a possible value. The `break` statement is crucial to prevent 'fall-through' to subsequent cases.",
        codeExamples: [
          {
            title: "Day of the Week",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int day = 3; // 1 for Monday, ..., 7 for Sunday
    printf("Day number: %d\\n", day);

    switch (day) {
        case 1: printf("Monday\\n"); break;
        case 2: printf("Tuesday\\n"); break;
        case 3: printf("Wednesday\\n"); break;
        case 4: printf("Thursday\\n"); break;
        case 5: printf("Friday\\n"); break;
        case 6: printf("Saturday\\n"); break;
        case 7: printf("Sunday\\n"); break;
        default: printf("Invalid day\\n");
    }
    return 0;
}`),
            output: "Day number: 3\nWednesday"
          },
          {
            title: "Vowel or Consonant Checker (for lowercase)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    char ch = 'e';
    printf("Character: %c\\n", ch);

    switch (ch) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            printf("It's a vowel.\\n");
            break;
        default:
            if ((ch >= 'a' && ch <= 'z')) {
                printf("It's a consonant.\\n");
            } else {
                printf("Not a lowercase alphabet letter.\\n");
            }
    }
    return 0;
}`),
            explanation: "Demonstrates 'fall-through' where multiple cases execute the same block of code. Also shows a default case with an if-condition for more specific handling.",
            output: "Character: e\nIt's a vowel."
          },
          {
            title: "Simple Calculator (using char for operation)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    char operation = '*';
    double num1 = 10.5, num2 = 2.0;
    double result;

    printf("%.1f %c %.1f = ", num1, operation, num2);

    switch (operation) {
        case '+': result = num1 + num2; printf("%.1f\\n", result); break;
        case '-': result = num1 - num2; printf("%.1f\\n", result); break;
        case '*': result = num1 * num2; printf("%.1f\\n", result); break;
        case '/': 
            if (num2 != 0) {
                result = num1 / num2; printf("%.2f\\n", result);
            } else {
                printf("Error! Division by zero.\\n");
            }
            break;
        default: printf("Invalid operation.\\n");
    }
    return 0;
}`),
            output: "10.5 * 2.0 = 21.0"
          },
          {
            title: "Importance of 'break' (Fall-through example)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int choice = 1;
    printf("Choice: %d\\n", choice);
    switch (choice) {
        case 1:
            printf("Case 1 executed. ");
            // No break here!
        case 2:
            printf("Case 2 executed. ");
            // No break here!
        case 3:
            printf("Case 3 executed. ");
            break; // Break for case 3
        default:
            printf("Default case. ");
    }
    printf("\\n");
    return 0;
}`),
            explanation: "Without `break`, execution 'falls through' to the next case(s) until a `break` is encountered or the `switch` block ends. This can be intentional but is often a source of bugs.",
            output: "Choice: 1\nCase 1 executed. Case 2 executed. Case 3 executed. "
          },
          {
            title: "Using 'default' Case",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int option = 5; // An option not covered by specific cases
    printf("Option: %d\\n", option);
    switch (option) {
        case 1: printf("Option One selected.\\n"); break;
        case 2: printf("Option Two selected.\\n"); break;
        default: printf("Invalid option. Please choose 1 or 2.\\n");
    }
    return 0;
}`),
            explanation: "The `default` case is executed if the switch expression does not match any of the `case` values. It's good practice to include a `default` case to handle unexpected values.",
            output: "Option: 5\nInvalid option. Please choose 1 or 2."
          },
          {
            title: "Switch with Integer Enum (C99+ for enum in switch)",
            code: ensureStdioIncluded(
`#include <stdio.h>

typedef enum { RED, GREEN, BLUE } Color;

int main() {
    Color selectedColor = GREEN;
    
    switch (selectedColor) {
        case RED:   printf("Selected color is Red.\\n"); break;
        case GREEN: printf("Selected color is Green.\\n"); break;
        case BLUE:  printf("Selected color is Blue.\\n"); break;
        // A default case might be good if Color could have other values
        // default: printf("Unknown color.\\n");
    }
    return 0;
}`),
            explanation: "Enumerations can be used in `switch` statements. Each `case` corresponds to an enumerator value.",
            output: "Selected color is Green."
          }
        ]
      },
      {
        id: "3-3",
        name: "Loops: for, while, do-while",
        explanation: "Loops are used to execute a block of code repeatedly. `for` loops are ideal when the number of iterations is known. `while` loops execute as long as a condition is true (checked before each iteration). `do-while` loops also execute as long as a condition is true, but the condition is checked *after* each iteration (guaranteeing at least one execution).",
        codeExamples: [
          {
            title: "Printing Numbers 1 to 5 (for, while, do-while)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    printf("Using for loop:\\n");
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\\n");

    printf("Using while loop:\\n");
    int j = 1;
    while (j <= 5) {
        printf("%d ", j);
        j++;
    }
    printf("\\n");

    printf("Using do-while loop:\\n");
    int k = 1;
    do {
        printf("%d ", k);
        k++;
    } while (k <= 5);
    printf("\\n");
    return 0;
}`),
            output:
`Using for loop:
1 2 3 4 5 
Using while loop:
1 2 3 4 5 
Using do-while loop:
1 2 3 4 5 `
          },
          {
            title: "Sum of First N Natural Numbers (using for loop)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int n = 10;
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    printf("Sum of first %d natural numbers is %d\\n", n, sum);
    return 0;
}`),
            output: "Sum of first 10 natural numbers is 55"
          },
          {
            title: "Reading Input Until a Sentinel Value (using while loop)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int number;
    int sum = 0;
    printf("Enter numbers to sum, enter 0 to stop:\\n");
    
    // It's generally safer to check the return value of scanf
    while (scanf("%d", &number) == 1 && number != 0) {
        sum += number;
        printf("Current sum: %d. Enter next number (0 to stop):\\n", sum);
    }
    // Clear trailing newline if scanf left one before other inputs
    // while(getchar() != '\\n' && getchar() != EOF); 
    printf("Final sum: %d\\n", sum);
    return 0;
}`),
            explanation: "This loop continues to take input and add to sum until the user enters 0. Checking `scanf`'s return value ensures input was successful.",
            output: "(User enters 5, 10, 3, 0)\nEnter numbers to sum, enter 0 to stop:\n5\nCurrent sum: 5. Enter next number (0 to stop):\n10\nCurrent sum: 15. Enter next number (0 to stop):\n3\nCurrent sum: 18. Enter next number (0 to stop):\n0\nFinal sum: 18"
          },
          {
            title: "Simple Password Entry Attempt (using do-while loop)",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <string.h> // For strcmp

int main() {
    char password[20];
    char correctPassword[] = "secret123";
    int attempts = 0;
    
    do {
        if (attempts > 0) {
            printf("Incorrect password. Try again.\\n");
        }
        printf("Enter password: ");
        scanf("%19s", password); // Safer scanf for strings
        
        // Clear input buffer after scanf("%s") to avoid issues with subsequent inputs
        int c;
        while ((c = getchar()) != '\\n' && c != EOF);

        attempts++;
    } while (strcmp(password, correctPassword) != 0 && attempts < 3);

    if (strcmp(password, correctPassword) == 0) {
        printf("Password accepted!\\n");
    } else {
        printf("Too many incorrect attempts. Access denied.\\n");
    }
    return 0;
}`),
            explanation: "The `do-while` loop ensures the password prompt is shown at least once. `strcmp` from `<string.h>` is used to compare strings. Using `%19s` with `scanf` is safer.",
            output: "(User enters 'wrong', then 'secret123')\nEnter password: wrong\nIncorrect password. Try again.\nEnter password: secret123\nPassword accepted!"
          },
          {
            title: "Nested Loops (Printing a 3x3 Star Pattern)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    for (int i = 0; i < 3; i++) {      // Outer loop for rows
        for (int j = 0; j < 3; j++) {  // Inner loop for columns
            printf("* ");
        }
        printf("\\n"); // Newline after each row
    }
    return 0;
}`),
            output:
`* * * 
* * * 
* * * `
          },
          {
            title: "Infinite Loop (and how to break, conceptually)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int count = 0;
    // while (1) { // or for(;;) {
    //     printf("Looping forever... count = %d\\n", count++);
    //     // To stop this, you'd typically press Ctrl+C in the terminal
    //     // Or include a break condition:
    //     if (count > 5) { // Example break condition
    //        printf("Breaking loop after 5 iterations.\\n");
    //        break;
    //     }
    //     // On some systems, you might need to flush output in a fast loop
    //     // fflush(stdout); 
    // }
    printf("Example of an infinite loop structure (commented out to prevent actual infinite loop).\\n");
    printf("Uncomment the while(1) or for(;;) with a break condition to see it run.\\n");
    return 0;
}`),
            explanation: "`while(1)` or `for(;;)` creates an infinite loop. These are used in specific scenarios like event loops or embedded systems, often with a `break` condition inside or an external way to terminate.",
            output: "Example of an infinite loop structure (commented out to prevent actual infinite loop).\nUncomment the while(1) or for(;;) with a break condition to see it run."
          }
        ]
      },
      {
        id: "3-4",
        name: "Break and Continue",
        explanation: "`break` is used to exit a loop or `switch` statement prematurely. `continue` skips the current iteration of a loop and proceeds to the next iteration's condition check (for `while`, `do-while`) or update expression (for `for`).",
        codeExamples: [
          {
            title: "Using 'break' and 'continue' in a 'for' loop",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    printf("Using break (stops when i is 5):\\n");
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            printf("Breaking loop at i = %d\\n", i);
            break; // Exit loop when i is 5
        }
        printf("%d ", i);
    }
    printf("\\nDone with break loop.\\n\\n");

    printf("Using continue (skips when i is 5):\\n");
    for (int i = 1; i <= 7; i++) {
        if (i == 5) {
            printf("(Skipping %d) ", i);
            continue; // Skip iteration when i is 5
        }
        printf("%d ", i);
    }
    printf("\\nDone with continue loop.\\n");
    return 0;
}`),
            output:
`Using break (stops when i is 5):
1 2 3 4 Breaking loop at i = 5
Done with break loop.

Using continue (skips when i is 5):
1 2 3 4 (Skipping 5) 6 7 
Done with continue loop.`
          },
          {
            title: "'break' in a 'while' loop (Find first multiple of 7)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int num = 1;
    printf("Searching for the first multiple of 7 starting from 1:\\n");
    while (1) { // Potentially infinite loop, relies on break
        if (num % 7 == 0) {
            printf("Found it! %d is a multiple of 7.\\n", num);
            break; // Exit the loop
        }
        if (num > 50) { // Safety break
             printf("Searched up to 50, not found or error.\\n");
             break;
        }
        num++;
    }
    return 0;
}`),
            output: "Searching for the first multiple of 7 starting from 1:\nFound it! 7 is a multiple of 7."
          },
          {
            title: "'continue' in a 'while' loop (Print only odd numbers)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int i = 0;
    printf("Printing odd numbers up to 10:\\n");
    while (i < 10) {
        i++;
        if (i % 2 == 0) { // If i is even
            continue;     // Skip the rest of this iteration
        }
        printf("%d ", i);
    }
    printf("\\n");
    return 0;
}`),
            output: "Printing odd numbers up to 10:\n1 3 5 7 9 "
          },
          {
            title: "'break' in Nested Loops (Breaks only the inner loop)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    for (int i = 1; i <= 3; i++) {
        printf("Outer loop i = %d\\n", i);
        for (int j = 1; j <= 5; j++) {
            if (j == 3) {
                printf("  Inner loop j = %d, breaking inner loop.\\n", j);
                break; // This break only exits the inner for-loop
            }
            printf("  Inner loop j = %d\\n", j);
        }
        printf("Back in outer loop after inner loop finished or broke.\\n");
    }
    return 0;
}`),
            output:
`Outer loop i = 1
  Inner loop j = 1
  Inner loop j = 2
  Inner loop j = 3, breaking inner loop.
Back in outer loop after inner loop finished or broke.
Outer loop i = 2
  Inner loop j = 1
  Inner loop j = 2
  Inner loop j = 3, breaking inner loop.
Back in outer loop after inner loop finished or broke.
Outer loop i = 3
  Inner loop j = 1
  Inner loop j = 2
  Inner loop j = 3, breaking inner loop.
Back in outer loop after inner loop finished or broke.`
          },
          {
            title: "Using 'continue' to skip processing negative numbers in an array sum",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int numbers[] = {10, -5, 20, -2, 8, -15, 3};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    int sum = 0;

    printf("Summing only positive numbers from the array:\\n");
    for (int i = 0; i < size; i++) {
        if (numbers[i] < 0) {
            printf("Skipping negative number: %d\\n", numbers[i]);
            continue; // Skip to the next iteration if number is negative
        }
        sum += numbers[i];
        printf("Added %d, current sum: %d\\n", numbers[i], sum);
    }
    printf("Total sum of positive numbers: %d\\n", sum);
    return 0;
}`),
            output:
`Summing only positive numbers from the array:
Added 10, current sum: 10
Skipping negative number: -5
Added 20, current sum: 30
Skipping negative number: -2
Added 8, current sum: 38
Skipping negative number: -15
Added 3, current sum: 41
Total sum of positive numbers: 41`
          },
          {
            title: "'break' in a 'do-while' loop (Input validation)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int age;
    do {
        printf("Enter your age (must be 18 or older): ");
        if (scanf("%d", &age) != 1) { // Check if input is a valid integer
             printf("Invalid input. Please enter a number.\\n");
             // Clear invalid input from buffer
             while(getchar() != '\\n' && getchar() != EOF);
             age = 0; // Reset age to ensure loop continues or condition fails
             continue;
        }
        if (age >= 18) {
            printf("Age %d accepted.\\n", age);
            break; // Exit loop if age is valid
        }
        printf("Invalid age. Must be 18 or older. Please try again.\\n");
    } while (1); // Condition is always true, relies on internal break

    // Potentially more code here using the valid 'age'
    return 0;
}`),
            explanation: "This `do-while(1)` loop continues indefinitely until a `break` statement is executed, which happens when valid input is received. Input validation for `scanf` is added.",
            output: "(User enters 15, then 20)\nEnter your age (must be 18 or older): 15\nInvalid age. Must be 18 or older. Please try again.\nEnter your age (must be 18 or older): 20\nAge 20 accepted."
          }
        ]
      }
    ]
  },
  {
    id: "module-4",
    title: "Functions: Building Modular Code",
    level: ModuleLevel.INTERMEDIATE,
    tagline: "Creating reusable and organized code blocks.",
    // icon: FunctionsIcon, // Removed
    description: "Learn to write reusable blocks of code called functions. Understand function declaration, definition, parameters, return values, and scope.",
    expertInsight: "Functions are the building blocks of C programs. Well-designed functions make your code easier to understand, test, and maintain. Aim for functions that do one thing well.",
    topics: [
      {
        id: "4-1",
        name: "Function Basics",
        explanation: "Functions are self-contained blocks of code that perform a specific task. They help in organizing code, making it reusable, and improving readability. A function can be called multiple times from different parts of a program. Key components include declaration (prototype), definition (implementation), parameters (inputs), and return value (output).",
        codeExamples: [
          {
            title: "Simple Void Function (No Parameters, No Return Value)",
            code: ensureStdioIncluded(
`#include <stdio.h>

// Function Declaration (Prototype) - Optional if defined before main
void greet(void);

// Function Definition
void greet(void) {
    printf("Hello from the greet function!\\n");
}

int main() {
    greet(); // Function Call
    greet(); // Call it again
    return 0;
}`),
            explanation: "A `void` function does not return a value. `void` in parameters means it takes no arguments. The prototype declares the function to `main` before its full definition.",
            output: "Hello from the greet function!\nHello from the greet function!"
          },
          {
            title: "Function with Parameters",
            code: ensureStdioIncluded(
`#include <stdio.h>

void printNumber(int num) { // 'num' is a parameter
    printf("The number passed is: %d\\n", num);
}

int main() {
    printNumber(10);    // 10 is an argument
    int myVar = 25;
    printNumber(myVar); // myVar is an argument
    return 0;
}`),
            explanation: "Functions can accept input values through parameters. When calling the function, you provide arguments that are passed to these parameters.",
            output: "The number passed is: 10\nThe number passed is: 25"
          },
          {
            title: "Function with a Return Value",
            code: ensureStdioIncluded(
`#include <stdio.h>

// Function that adds two integers and returns the sum
int add(int a, int b) {
    int sum = a + b;
    return sum; // Returns the calculated sum
}

int main() {
    int num1 = 5, num2 = 7;
    int result = add(num1, num2); // Store the returned value
    printf("The sum of %d and %d is %d\\n", num1, num2, result);
    printf("Sum of 10 and 20 is %d\\n", add(10, 20)); // Use returned value directly
    return 0;
}`),
            explanation: "Functions can return a single value to the caller using the `return` statement. The data type of the returned value must match the function's declared return type.",
            output: "The sum of 5 and 7 is 12\nSum of 10 and 20 is 30"
          },
          {
            title: "Function Prototype (Declaration)",
            code: ensureStdioIncluded(
`#include <stdio.h>

// Function Prototype: Tells the compiler about the function before it's defined
int multiply(int x, int y); // Declaration

int main() {
    int product = multiply(6, 7); // Call the function
    printf("6 * 7 = %d\\n", product);
    return 0;
}

// Function Definition: The actual implementation of the function
int multiply(int x, int y) {
    return x * y;
}`),
            explanation: "A function prototype declares the function's name, return type, and parameter types. It allows you to define functions after `main` or in different files, as long as the compiler sees the prototype first.",
            output: "6 * 7 = 42"
          },
          {
            title: "Passing Arguments by Value",
            code: ensureStdioIncluded(
`#include <stdio.h>

void modifyValue(int val) {
    printf("Inside modifyValue, received val = %d\\n", val);
    val = 100; // This changes the local copy 'val'
    printf("Inside modifyValue, changed val to %d\\n", val);
}

int main() {
    int original = 10;
    printf("Before calling modifyValue, original = %d\\n", original);
    modifyValue(original);
    printf("After calling modifyValue, original = %d (Unchanged)\\n", original);
    return 0;
}`),
            explanation: "C passes arguments to functions by value. This means a copy of the argument's value is passed to the function. Changes made to the parameter inside the function do not affect the original argument in the calling code.",
            output: "Before calling modifyValue, original = 10\nInside modifyValue, received val = 10\nInside modifyValue, changed val to 100\nAfter calling modifyValue, original = 10 (Unchanged)"
          },
          {
            title: "Local vs. Global Variables (Scope with Functions)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int globalVar = 100; // Global variable, accessible by all functions

void display() {
    int localVar = 10; // Local variable, only accessible within display()
    printf("Inside display(): localVar = %d, globalVar = %d\\n", localVar, globalVar);
    // printf("num from main = %d\\n"); // Error: 'num' is not visible here
}

int main() {
    int num = 5; // Local to main()
    printf("Inside main(): num = %d, globalVar = %d\\n", num, globalVar);
    // printf("localVar from display = %d\\n"); // Error: 'localVar' is not visible here
    display();
    return 0;
}`),
            explanation: "Global variables are declared outside any function and can be accessed (and modified) by any function. Local variables are declared inside a function and are only accessible within that function.",
            output: "Inside main(): num = 5, globalVar = 100\nInside display(): localVar = 10, globalVar = 100"
          }
        ]
      },
      {
        id: "4-2",
        name: "Recursion",
        explanation: "Recursion is a programming technique where a function calls itself to solve a smaller instance of the same problem. Each recursive call breaks the problem down until it reaches a 'base case', which is a simple condition that can be solved directly without further recursion. Recursion can lead to elegant solutions for problems like tree traversals or mathematical sequences, but it's important to ensure a base case exists to prevent infinite loops and stack overflow.",
        codeExamples: [
          {
            title: "Factorial Calculation using Recursion",
            code: ensureStdioIncluded(
`#include <stdio.h>

long long factorial(int n) {
    // Base case: factorial of 0 or 1 is 1
    if (n == 0 || n == 1) {
        return 1;
    }
    // Recursive step: n * factorial(n-1)
    else {
        return (long long)n * factorial(n - 1);
    }
}

int main() {
    int num = 5;
    printf("Factorial of %d is %lld\\n", num, factorial(num)); // Output: 120
    num = 0;
    printf("Factorial of %d is %lld\\n", num, factorial(num)); // Output: 1
    num = 10;
    printf("Factorial of %d is %lld\\n", num, factorial(num)); // Output: 3628800
    return 0;
}`),
            explanation: "The `factorial` function calls itself with `n-1` until `n` becomes 0 or 1 (the base case). `long long` is used to accommodate larger factorial values.",
            output: "Factorial of 5 is 120\nFactorial of 0 is 1\nFactorial of 10 is 3628800"
          },
          {
            title: "Fibonacci Sequence using Recursion",
            code: ensureStdioIncluded(
`#include <stdio.h>

int fibonacci(int n) {
    // Base cases
    if (n <= 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }
    // Recursive step
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

int main() {
    int count = 10;
    printf("Fibonacci sequence up to %d terms:\\n", count);
    for (int i = 0; i < count; i++) {
        printf("%d ", fibonacci(i));
    }
    printf("\\n");
    return 0;
}`),
            explanation: "Calculates the nth Fibonacci number. Note: This recursive Fibonacci is inefficient for large `n` due to repeated calculations. Iterative solutions are often preferred for performance.",
            output: "Fibonacci sequence up to 10 terms:\n0 1 1 2 3 5 8 13 21 34 "
          },
          {
            title: "Sum of N Natural Numbers using Recursion",
            code: ensureStdioIncluded(
`#include <stdio.h>

int sumNatural(int n) {
    // Base case
    if (n <= 0) {
        return 0;
    }
    // Recursive step
    else {
        return n + sumNatural(n - 1);
    }
}

int main() {
    int num = 5;
    printf("Sum of first %d natural numbers is %d\\n", num, sumNatural(num)); // 5+4+3+2+1 = 15
    num = 10;
    printf("Sum of first %d natural numbers is %d\\n", num, sumNatural(num)); // 55
    return 0;
}`),
            output: "Sum of first 5 natural numbers is 15\nSum of first 10 natural numbers is 55"
          },
          {
            title: "Importance of Base Case (Avoiding Infinite Recursion)",
            code: ensureStdioIncluded(
`#include <stdio.h>

void countdown(int n) {
    printf("%d...\\n", n);
    if (n == 0) {
        printf("Base case reached (n=0). Not calling countdown further.\\n");
        return; // Base case
    }
     countdown(n - 1); // Recursive call only if not base case
}

int main() {
    printf("Countdown from 3:\\n");
    countdown(3);
    return 0;
}`),
            explanation: "A recursive function MUST have a base case that stops the recursion. Otherwise, it will call itself indefinitely, leading to a stack overflow error.",
            output: "Countdown from 3:\n3...\n2...\n1...\n0...\nBase case reached (n=0). Not calling countdown further."
          },
          {
            title: "Printing a String in Reverse using Recursion",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <string.h>

void printReverse(char *str, int index) {
    // Base case: if index is less than 0, we're done
    if (index < 0) {
        return;
    }
    // Print the character at the current index
    printf("%c", str[index]);
    // Recursive call for the previous character
    printReverse(str, index - 1);
}

int main() {
    char myString[] = "hello";
    printf("Original string: %s\\n", myString);
    printf("Reversed string: ");
    printReverse(myString, strlen(myString) - 1);
    printf("\\n");
    return 0;
}`),
            output: "Original string: hello\nReversed string: olleh"
          },
          {
            title: "Stack Overflow Risk with Deep Recursion (Conceptual)",
            code: ensureStdioIncluded(
`#include <stdio.h>

void veryDeepRecursion(int n) {
    if (n == 0) {
        // printf("Base case hit!\\n"); // Potentially add output for base case
        return;
    }
    // Optional: print depth for tracing, but can be slow for large n
    // if (n % 1000 == 0) printf("Depth: %d\\n", n); 
    veryDeepRecursion(n - 1);
}

int main() {
    printf("Illustrating stack overflow risk (conceptually).\\n");
    printf("Each recursive call uses space on the call stack.\\n");
    printf("Too many calls (deep recursion) can exhaust this stack space.\\n");
    // veryDeepRecursion(200000); // This might crash your program! Test with care.
    // The actual limit depends on system configuration (stack size).
    printf("Calling with a safe depth (e.g., 5):\\n");
    veryDeepRecursion(5); 
    printf("Completed safely for depth 5.\\n");
    printf("Calling with a larger, potentially risky depth (e.g., 50000 - adjust based on system limits for testing):\\n");
    // veryDeepRecursion(50000); // This may or may not crash depending on your system.
    // printf("If you see this, 50000 was okay on your system.\\n");
    return 0;
}`),
            explanation: "Each function call (including recursive ones) adds a frame to the program's call stack. If recursion goes too deep without hitting a base case quickly enough, the call stack can run out of space, causing a 'stack overflow' error and program termination.",
            output: "Illustrating stack overflow risk (conceptually).\nEach recursive call uses space on the call stack.\nToo many calls (deep recursion) can exhaust this stack space.\nCalling with a safe depth (e.g., 5):\nCompleted safely for depth 5.\nCalling with a larger, potentially risky depth (e.g., 50000 - adjust based on system limits for testing):"
          }
        ]
      }
    ]
  },
  {
    id: "module-5",
    title: "Arrays and Strings",
    level: ModuleLevel.INTERMEDIATE,
    tagline: "Managing collections of data and text.",
    // icon: ArraysStringsIcon, // Removed
    description: "Manage collections of data using arrays, and learn how strings are handled in C as null-terminated character arrays.",
    expertInsight: "Arrays are C's fundamental way to group similar data. Understanding how they relate to memory and pointers is key. Strings, being char arrays, require careful handling of the null terminator.",
    topics: [
      {
        id: "5-1",
        name: "Arrays",
        explanation: "An array is a collection of elements of the same data type stored in contiguous memory locations. Each element can be accessed using an index (starting from 0). Arrays are useful for storing lists of data, like numbers, characters, or even more complex structures.",
        codeExamples: [
          {
            title: "Declaring and Initializing 1D Arrays",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    // Declare an array of 5 integers
    int numbers[5]; 
    numbers[0] = 10;
    numbers[1] = 20;
    numbers[2] = 30;
    numbers[3] = 40;
    numbers[4] = 50;

    // Declare and initialize at the same time
    float scores[] = {95.5f, 88.0f, 79.5f, 92.0f}; // Size inferred as 4
    char grades[3] = {'A', 'B', 'C'};

    printf("First number: %d\\n", numbers[0]);
    printf("Second score: %.1f\\n", scores[1]);
    printf("Third grade: %c\\n", grades[2]);
    return 0;
}`),
            output: "First number: 10\nSecond score: 88.0\nThird grade: C"
          },
          {
            title: "Accessing Array Elements and Finding Size",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int data[] = {2, 4, 6, 8, 10, 12};
    int size = sizeof(data) / sizeof(data[0]); // Calculate number of elements

    printf("Array elements: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", data[i]); // Accessing element at index i
    }
    printf("\\n");
    printf("The array has %d elements.\\n", size);
    printf("Element at index 3 is: %d\\n", data[3]); // Accesses 8
    return 0;
}`),
            explanation: "Array elements are accessed using `arrayName[index]`. The `sizeof` operator can be used to determine the number of elements in an array.",
            output: "Array elements: 2 4 6 8 10 12 \nThe array has 6 elements.\nElement at index 3 is: 8"
          },
          {
            title: "Iterating Through an Array (Sum and Average)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    double values[] = {10.0, 15.5, 20.0, 25.5, 30.0};
    int count = sizeof(values) / sizeof(values[0]);
    double sum = 0.0;

    for (int i = 0; i < count; i++) {
        sum += values[i];
    }
    double average = sum / count;

    printf("Sum of array elements: %.2f\\n", sum);
    printf("Average of array elements: %.2f\\n", average);
    return 0;
}`),
            output: "Sum of array elements: 101.00\nAverage of array elements: 20.20"
          },
          {
            title: "Multidimensional Arrays (2D Array Basics)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    // Declare and initialize a 2x3 2D array (2 rows, 3 columns)
    int matrix[2][3] = {
        {1, 2, 3},  // Row 0
        {4, 5, 6}   // Row 1
    };

    printf("Matrix elements:\\n");
    for (int i = 0; i < 2; i++) {        // Iterate through rows
        for (int j = 0; j < 3; j++) {    // Iterate through columns
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }
    printf("Element at row 1, col 2 is: %d\\n", matrix[1][2]); // Accesses 6
    return 0;
}`),
            explanation: "2D arrays can be thought of as arrays of arrays, representing grids or matrices. They are accessed using two indices: `arrayName[row][column]`.",
            output: "Matrix elements:\n1 2 3 \n4 5 6 \nElement at row 1, col 2 is: 6"
          },
          {
            title: "Passing Arrays to Functions",
            code: ensureStdioIncluded(
`#include <stdio.h>

// Function to print array elements
// When an array is passed to a function, it decays into a pointer,
// so we also need to pass its size.
void printArray(int arr[], int size) {
    printf("Array in function: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    // Example of modification:
    // if (size > 0) arr[0] = 100; // This WILL change the original array
}

int main() {
    int myArray[] = {11, 22, 33, 44};
    int len = sizeof(myArray) / sizeof(myArray[0]);
    
    printf("myArray[0] before function call: %d\\n", myArray[0]);
    printArray(myArray, len);
    // If printArray modified myArray[0]:
    // printf("myArray[0] after function call: %d\\n", myArray[0]); 
    return 0;
}`),
            explanation: "When passing an array to a function, you're actually passing the address of its first element. Thus, modifications to array elements within the function affect the original array. It's crucial to pass the size of the array as well, as the function cannot determine it from the pointer alone.",
            output: "myArray[0] before function call: 11\nArray in function: 11 22 33 44 "
          },
          {
            title: "Array Bounds and Out-of-Bounds Access (Caution!)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int smallArray[3] = {1, 2, 3};

    printf("Element at index 0: %d\\n", smallArray[0]);
    printf("Element at index 2: %d\\n", smallArray[2]);

    // Accessing out of bounds:
    // printf("Element at index 3 (out of bounds): %d\\n", smallArray[3]); // DANGEROUS!
    // smallArray[5] = 100; // DANGEROUS! Writing out of bounds.

    printf("Accessing array elements within bounds is safe.\\n");
    printf("Accessing or writing outside array bounds leads to undefined behavior (crashes, incorrect results, security vulnerabilities).\\n");
    printf("C does not perform automatic bounds checking on arrays.\\n");
    return 0;
}`),
            explanation: "C does not check if array indices are within their valid range. Accessing `array[index]` where `index` is less than 0 or greater than or equal to the array size is an 'out-of-bounds' access. This leads to undefined behavior, which can manifest as crashes, incorrect data, or security flaws. Programmers are responsible for ensuring bounds are respected.",
            output: "Element at index 0: 1\nElement at index 2: 3\nAccessing array elements within bounds is safe.\nAccessing or writing outside array bounds leads to undefined behavior (crashes, incorrect results, security vulnerabilities).\nC does not perform automatic bounds checking on arrays."
          }
        ]
      },
      {
        id: "5-2",
        name: "Strings",
        explanation: "In C, a string is essentially an array of characters terminated by a special null character ('\\0'). This null terminator signifies the end of the string. C provides a standard library `<string.h>` with various functions for string manipulation, such as finding length, copying, concatenating, and comparing strings.",
        codeExamples: [
          {
            title: "String as a Character Array (Null-Terminated)",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <string.h> // For strlen

int main() {
    // String literal automatically includes null terminator
    char greeting[] = "Hello"; 
    // Is equivalent to: char greeting[] = {'H', 'e', 'l', 'l', 'o', '\\0'};
    
    // Manually creating a null-terminated string
    char name[6]; // Needs space for 5 chars + null terminator
    name[0] = 'A';
    name[1] = 'd';
    name[2] = 'a';
    name[3] = '\\0'; // Manually add null terminator for short name

    printf("Greeting: %s\\n", greeting);
    printf("Name: %s\\n", name);

    // Size of array vs. length of string
    printf("Size of greeting array (includes '\\0'): %zu bytes\\n", sizeof(greeting)); 
    printf("Length of greeting string (strlen, excludes '\\0'): %zu\\n", strlen(greeting));
    return 0;
}`),
            output: "Greeting: Hello\nName: Ada\nSize of greeting array (includes '\\0'): 6 bytes\nLength of greeting string (strlen, excludes '\\0'): 5"
          },
          {
            title: "Initializing Strings",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    char str1[] = "First String"; // Size inferred, includes null char
    char str2[50] = "Second String"; // Explicit size, must be large enough
    char str3[5] = "Hi"; // {'H', 'i', '\\0', uninit, uninit} - Ok

    // char str4[2] = "TooLong"; // WRONG - not enough space for "TooLong" + '\\0'
    // This would cause a buffer overflow or truncation/warning.
    
    char str5[] = {'C', ' ', 'i', 's', ' ', 'f', 'u', 'n', '\\0'}; // Manual init

    printf("str1: %s\\n", str1);
    printf("str2: %s\\n", str2);
    printf("str3: %s\\n", str3); // Prints "Hi"
    printf("str5: %s\\n", str5);
    return 0;
}`),
            output: "str1: First String\nstr2: Second String\nstr3: Hi\nstr5: C is fun"
          },
          {
            title: "Reading Strings (scanf, fgets)",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <string.h> // For strlen if used to remove newline

int main() {
    char nameScanf[50];
    char addressFgets[100];

    printf("Enter your name (scanf, max 49 chars): ");
    // scanf("%s", nameScanf); // DANGEROUS: Reads until whitespace, buffer overflow risk
    scanf("%49s", nameScanf); // Safer: limits input to 49 chars + null
    printf("Hello, %s (via scanf)!\\n", nameScanf);

    // Clear input buffer before fgets (important after scanf if newline might be left)
    int c;
    while ((c = getchar()) != '\\n' && c != EOF); 

    printf("Enter your address (fgets, max 99 chars then press Enter): ");
    // fgets reads a line, including newline if it fits, safer
    if (fgets(addressFgets, sizeof(addressFgets), stdin) != NULL) {
        // Remove trailing newline from fgets if present
        size_t len = strlen(addressFgets);
        if (len > 0 && addressFgets[len-1] == '\\n') {
           addressFgets[len-1] = '\\0';
        }
        printf("Address (via fgets): %s\\n", addressFgets);
    } else {
        printf("Error reading address with fgets.\\n");
    }
    return 0;
}`),
            explanation: "`scanf(\"%s\", ...)` is generally unsafe for string input due to buffer overflow risks. `scanf(\"%49s\", ...)` is a bit safer by limiting characters. `fgets` is preferred as it allows specifying buffer size and reads the whole line (including newline, which may need removal).",
            output: "(User enters 'Alice' then '123 Main St')\nEnter your name (scanf, max 49 chars): Alice\nHello, Alice (via scanf)!\nEnter your address (fgets, max 99 chars then press Enter): 123 Main St\nAddress (via fgets): 123 Main St"
          },
          {
            title: "String Manipulation Functions from <string.h>",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <string.h> // For string functions

int main() {
    char strA[50] = "Hello";
    char strB[] = "World";
    char strC[50];

    // 1. strlen() - String length (excluding null terminator)
    printf("Length of strA ('%s'): %zu\\n", strA, strlen(strA)); // Output: 5

    // 2. strcpy() - String copy (destination, source) - CAUTION: no size check
    // Use strncpy for safety: strncpy(strC, strA, sizeof(strC)-1); strC[sizeof(strC)-1] = '\\0';
    strcpy(strC, strA);
    printf("strC after strcpy(strC, strA): '%s'\\n", strC); // Output: "Hello"

    // 3. strcat() - String concatenation (destination, source) - CAUTION: no size check
    // Ensure destination has enough space!
    // Use strncat for safety: strncat(strA, " ", sizeof(strA) - strlen(strA) - 1);
    strcat(strA, " ");   // strA becomes "Hello "
    strcat(strA, strB);  // strA becomes "Hello World"
    printf("strA after strcat with strB: '%s'\\n", strA);

    // 4. strcmp() - String comparison
    // Returns 0 if equal, <0 if str1 < str2, >0 if str1 > str2
    char s1[] = "apple";
    char s2[] = "apply";
    int comparison = strcmp(s1, s2);
    if (comparison == 0) {
        printf("'%s' and '%s' are identical.\\n", s1, s2);
    } else if (comparison < 0) {
        printf("'%s' comes before '%s'.\\n", s1, s2);
    } else {
        printf("'%s' comes after '%s'.\\n", s1, s2);
    }
    return 0;
}`),
            output: "Length of strA ('Hello'): 5\nstrC after strcpy(strC, strA): 'Hello'\nstrA after strcat with strB: 'Hello World'\n'apple' comes before 'apply'."
          },
          {
            title: "Iterating Through a String (Character by Character)",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <string.h> // For strlen

int main() {
    char message[] = "C Programming";
    size_t length = strlen(message); // Use size_t for strlen result

    printf("Characters in '%s':\\n", message);
    for (size_t i = 0; i < length; i++) { // Iterate up to length (excluding null char)
        printf("Char at index %zu: %c\\n", i, message[i]);
    }

    printf("\\nIterating until null terminator:\\n");
    for (int i = 0; message[i] != '\\0'; i++) {
        printf("%c", message[i]);
    }
    printf("\\n");
    return 0;
}`),
            output: "Characters in 'C Programming':\nChar at index 0: C\nChar at index 1:  \nChar at index 2: P\nChar at index 3: r\nChar at index 4: o\nChar at index 5: g\nChar at index 6: r\nChar at index 7: a\nChar at index 8: m\nChar at index 9: m\nChar at index 10: i\nChar at index 11: n\nChar at index 12: g\n\nIterating until null terminator:\nC Programming\n"
          },
          {
            title: "String Literals vs. Character Arrays",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    char arr_str[] = "Modifiable"; // Modifiable array on stack/data segment
    char *ptr_str = "Immutable";   // Pointer to a string literal (often in read-only memory)

    printf("Array string: %s\\n", arr_str);
    printf("Pointer string: %s\\n", ptr_str);

    arr_str[0] = 'm'; // This is OK, arr_str is a modifiable array
    printf("Modified array string: %s\\n", arr_str);

    // ptr_str[0] = 'I'; // DANGEROUS! Attempting to modify a string literal.
                       // This causes undefined behavior (often a crash).
    printf("Attempting to modify string literal via pointer (e.g. ptr_str[0] = 'X') is UNDEFINED BEHAVIOR.\\n");

    ptr_str = "New Literal"; // This is OK, ptr_str now points to a different literal
    printf("Pointer string now points to: %s\\n", ptr_str);
    return 0;
}`),
            explanation: "A character array initialized with a string literal (e.g., `char s[] = \"text\";`) creates a modifiable copy of the string. A character pointer initialized with a string literal (e.g., `char *p = \"text\";`) points to the literal itself, which is typically stored in a read-only part of memory. Attempting to modify a string literal results in undefined behavior.",
            output: "Array string: Modifiable\nPointer string: Immutable\nModified array string: modifiable\nAttempting to modify string literal via pointer (e.g. ptr_str[0] = 'X') is UNDEFINED BEHAVIOR.\nPointer string now points to: New Literal"
          }
        ]
      }
    ]
  },
  {
    id: "module-6",
    title: "Pointers: The Power and Peril",
    level: ModuleLevel.ADVANCED,
    tagline: "Mastering direct memory manipulation.",
    // icon: PointersIcon, // Removed
    description: "Dive deep into pointers, one of C's most powerful and challenging features. Understand memory addresses, pointer arithmetic, and dynamic memory allocation.",
    expertInsight: "Pointers give you direct memory access, which is powerful but requires diligence. Master them, and you unlock C's full potential; misuse them, and you invite bugs like segmentation faults and memory leaks.",
    topics: [
      {
        id: "6-1",
        name: "Pointer Basics",
        explanation: "A pointer is a variable that stores the memory address of another variable. They allow for direct memory manipulation, dynamic memory allocation, and efficient handling of arrays and complex data structures. The address-of operator `&` gets the memory address of a variable, and the dereference operator `*` (also called indirection operator) accesses the value stored at the address held by a pointer.",
        codeExamples: [
          {
            title: "Declaring Pointers, Address-of (&) and Dereference (*)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int var = 10;
    int *ptr; // Declare an integer pointer 'ptr'

    ptr = &var; // Assign the address of 'var' to 'ptr'

    printf("Value of var: %d\\n", var);
    printf("Address of var (&var): %p\\n", (void*)&var); // Use %p for addresses, cast to void*
    printf("Value of ptr (address it holds): %p\\n", (void*)ptr);
    printf("Value pointed to by ptr (*ptr): %d\\n", *ptr); // Dereference ptr

    *ptr = 20; // Modify the value at the address stored in ptr
    printf("New value of var (after *ptr = 20): %d\\n", var);
    return 0;
}`),
            output: "(Address will vary)\nValue of var: 10\nAddress of var (&var): 0x7ffc1234abcd\nValue of ptr (address it holds): 0x7ffc1234abcd\nValue pointed to by ptr (*ptr): 10\nNew value of var (after *ptr = 20): 20"
          },
          {
            title: "Pointers of Different Types",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int i_val = 100;
    float f_val = 3.14f;
    char c_val = 'A';

    int *i_ptr = &i_val;
    float *f_ptr = &f_val;
    char *c_ptr = &c_val;

    printf("Integer pointer (*i_ptr): %d at address %p\\n", *i_ptr, (void*)i_ptr);
    printf("Float pointer (*f_ptr): %.2f at address %p\\n", *f_ptr, (void*)f_ptr);
    printf("Char pointer (*c_ptr): %c at address %p\\n", *c_ptr, (void*)c_ptr);
    return 0;
}`),
            explanation: "Pointers are typed. An `int*` can only point to `int` variables, a `float*` to `float` variables, etc. This helps the compiler with pointer arithmetic and dereferencing.",
            output: "(Addresses will vary)\nInteger pointer (*i_ptr): 100 at address 0x7ffeedbeef00\nFloat pointer (*f_ptr): 3.14 at address 0x7ffeedbeef04\nChar pointer (*c_ptr): A at address 0x7ffeedbeef08"
          },
          {
            title: "NULL Pointers",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <stdlib.h> // For NULL (though stddef.h is more common for just NULL)

int main() {
    int *ptr1 = NULL; // Initialize pointer to NULL
    int *ptr2;       // Uninitialized pointer (dangerous!)

    if (ptr1 == NULL) {
        printf("ptr1 is a NULL pointer.\\n");
    } else {
        printf("ptr1 is not NULL.\\n");
    }

    // Attempting to dereference a NULL pointer causes undefined behavior (usually a crash)
    // if (ptr1 != NULL) { *ptr1 = 10; } // Safe check before dereferencing
    printf("Dereferencing ptr1 (which is NULL) would crash. e.g. *ptr1 = 5;\\n");

    // ptr2 is uninitialized, its value is garbage. Dereferencing it is also dangerous.
    // *ptr2 = 20; // DANGEROUS!
    printf("ptr2 is uninitialized. Dereferencing it (e.g. *ptr2 = 10;) is dangerous.\\n");
    
    printf("It's good practice to initialize pointers to NULL if not pointing to a valid address.\\n");
    return 0;
}`),
            explanation: "`NULL` is a special macro (often `(void*)0`) indicating that a pointer does not point to any valid memory location. It's crucial to check for `NULL` before dereferencing a pointer that might be `NULL`.",
            output: "ptr1 is a NULL pointer.\nDereferencing ptr1 (which is NULL) would crash. e.g. *ptr1 = 5;\nptr2 is uninitialized. Dereferencing it (e.g. *ptr2 = 10;) is dangerous.\nIt's good practice to initialize pointers to NULL if not pointing to a valid address."
          },
          {
            title: "Size of a Pointer",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <stddef.h> // For NULL definition (more common for NULL than stdlib.h)

int main() {
    int *i_ptr;
    char *c_ptr;
    double *d_ptr;
    void *v_ptr; // Generic pointer

    printf("Size of int pointer: %zu bytes\\n", sizeof(i_ptr));
    printf("Size of char pointer: %zu bytes\\n", sizeof(c_ptr));
    printf("Size of double pointer: %zu bytes\\n", sizeof(d_ptr));
    printf("Size of void pointer: %zu bytes\\n", sizeof(v_ptr));
    // Size of NULL macro depends on its definition, often same as void*
    printf("Size of NULL constant itself (implementation dependent): %zu bytes\\n", sizeof(NULL)); 
    return 0;
}`),
            explanation: "The size of a pointer variable itself (not the data it points to) is usually the same for all data types on a given system architecture (e.g., 4 bytes on 32-bit systems, 8 bytes on 64-bit systems). It depends on the memory addressing capability of the system.",
            output: "(Output for a 64-bit system)\nSize of int pointer: 8 bytes\nSize of char pointer: 8 bytes\nSize of double pointer: 8 bytes\nSize of void pointer: 8 bytes\nSize of NULL constant itself (implementation dependent): 8 bytes"
          },
          {
            title: "Pointer to Pointer (Double Pointer)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int var = 777;
    int *ptr;      // A pointer to an int
    int **pptr;    // A pointer to a pointer to an int (double pointer)

    ptr = &var;    // ptr holds address of var
    pptr = &ptr;   // pptr holds address of ptr

    printf("Value of var: %d\\n", var);
    printf("Value using ptr (*ptr): %d\\n", *ptr);
    printf("Value using pptr (**pptr): %d\\n", **pptr); // Dereference twice

    printf("\\nAddresses:\\n");
    printf("Address of var (&var): %p\\n", (void*)&var);
    printf("Address stored in ptr: %p\\n", (void*)ptr);
    printf("Address of ptr (&ptr): %p\\n", (void*)&ptr);
    printf("Address stored in pptr: %p\\n", (void*)pptr);
    printf("Address of pptr (&pptr): %p\\n", (void*)&pptr);
    return 0;
}`),
            explanation: "A pointer to a pointer (double pointer) stores the address of another pointer. This is useful for functions that need to modify a pointer itself (not just what it points to) or for managing arrays of pointers.",
            output: "(Addresses will vary)\nValue of var: 777\nValue using ptr (*ptr): 777\nValue using pptr (**pptr): 777\n\nAddresses:\nAddress of var (&var): 0x7ffee1234560\nAddress stored in ptr: 0x7ffee1234560\nAddress of ptr (&ptr): 0x7ffee1234568\nAddress stored in pptr: 0x7ffee1234568\nAddress of pptr (&pptr): 0x7ffee1234570"
          },
          {
            title: "Common Pointer Mistake: Uninitialized Pointer",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int *uninit_ptr; // Declared but not initialized

    // *uninit_ptr = 100; // DANGEROUS! uninit_ptr contains a garbage address.
                       // Writing to it will corrupt memory or crash.
    printf("Attempting to use uninit_ptr here (e.g. *uninit_ptr = 100;) is DANGEROUS!\\n");

    int x = 50;
    uninit_ptr = &x; // Now it's initialized and safe to use.
    *uninit_ptr = 100; 
    printf("Value of x (via uninit_ptr after proper init): %d\\n", x); // x is now 100

    printf("Always initialize pointers before dereferencing them.\\n");
    printf("Either to NULL or to a valid memory address.\\n");
    return 0;
}`),
            explanation: "An uninitialized pointer holds an arbitrary (garbage) memory address. Dereferencing such a pointer to read or write memory is a common and serious error, leading to undefined behavior.",
            output: "Attempting to use uninit_ptr here (e.g. *uninit_ptr = 100;) is DANGEROUS!\nValue of x (via uninit_ptr after proper init): 100\nAlways initialize pointers before dereferencing them.\nEither to NULL or to a valid memory address."
          }
        ]
      },
      {
        id: "6-2",
        name: "Pointers and Arrays",
        explanation: "In C, there's a close relationship between pointers and arrays. The name of an array often behaves like a pointer to its first element (it 'decays' to a pointer in many contexts). Pointer arithmetic can be used to navigate through array elements. This relationship is fundamental for many C idioms and efficient data manipulation.",
        codeExamples: [
          {
            title: "Array Name as a Pointer to its First Element",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr;

    // The array name 'arr' decays to a pointer to its first element here
    ptr = arr; // Equivalent to ptr = &arr[0];

    printf("Address of arr[0]: %p\\n", (void*)&arr[0]);
    printf("Value of arr (decays to pointer): %p\\n", (void*)arr);
    printf("Value of ptr: %p\\n", (void*)ptr);

    printf("Value at *arr (first element): %d\\n", *arr);       // Dereferences arr[0]
    printf("Value at *ptr (first element): %d\\n", *ptr);       // Dereferences arr[0]
    return 0;
}`),
            output: "(Addresses will vary but be the same for arr[0], arr, and ptr)\nAddress of arr[0]: 0x7ffeeabcde00\nValue of arr (decays to pointer): 0x7ffeeabcde00\nValue of ptr: 0x7ffeeabcde00\nValue at *arr (first element): 10\nValue at *ptr (first element): 10"
          },
          {
            title: "Pointer Arithmetic with Arrays",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int arr[] = {11, 22, 33, 44, 55};
    int *ptr = arr; // ptr points to arr[0]

    printf("ptr points to arr[0] = %d\\n", *ptr);

    ptr++; // Increment pointer: now points to arr[1]
    printf("ptr++ points to arr[1] = %d\\n", *ptr);

    ptr = ptr + 2; // Add 2 to pointer: now points to arr[3] (arr[1+2])
    printf("ptr + 2 points to arr[3] = %d\\n", *ptr);
    
    ptr--; // Decrement pointer: now points to arr[2]
    printf("ptr-- points to arr[2] = %d\\n", *ptr);
    return 0;
}`),
            explanation: "When you perform arithmetic (like `+`, `-`, `++`, `--`) on a pointer, it's scaled by the size of the data type it points to. `ptr++` for an `int*` moves the pointer forward by `sizeof(int)` bytes.",
            output: "ptr points to arr[0] = 11\nptr++ points to arr[1] = 22\nptr + 2 points to arr[3] = 44\nptr-- points to arr[2] = 33"
          },
          {
            title: "Accessing Array Elements Using Pointers (vs. Indexing)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int arr[] = {5, 10, 15, 20};
    int *ptr = arr;

    printf("Accessing using array indexing:\n");
    printf("arr[0]=%d, arr[1]=%d, arr[2]=%d, arr[3]=%d\\n", arr[0], arr[1], arr[2], arr[3]);

    printf("Accessing using pointer arithmetic and dereferencing:\n");
    printf("*ptr=%d, *(ptr+1)=%d, *(ptr+2)=%d, *(ptr+3)=%d\\n", *ptr, *(ptr+1), *(ptr+2), *(ptr+3));
    
    // arr[i] is equivalent to *(arr + i)
    printf("arr[2] = %d, *(arr + 2) = %d\\n", arr[2], *(arr + 2));
    return 0;
}`),
            explanation: "The expressions `arr[i]` and `*(arr + i)` are equivalent ways to access the i-th element of an array `arr`.",
            output: "Accessing using array indexing:\narr[0]=5, arr[1]=10, arr[2]=15, arr[3]=20\nAccessing using pointer arithmetic and dereferencing:\n*ptr=5, *(ptr+1)=10, *(ptr+2)=15, *(ptr+3)=20\narr[2] = 15, *(arr + 2) = 15"
          },
          {
            title: "Passing Arrays to Functions Using Pointers",
            code: ensureStdioIncluded(
`#include <stdio.h>

// Function to sum array elements, accepting a pointer and size
int sumArray(int *arr_ptr, int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        // sum += arr_ptr[i]; // Can use array notation with a pointer
        sum += *(arr_ptr + i); // Or pointer arithmetic
    }
    return sum;
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int count = sizeof(numbers) / sizeof(numbers[0]);

    int total = sumArray(numbers, count); // Pass array (decays to pointer) and its size
    printf("Sum of array elements: %d\\n", total);
    return 0;
}`),
            explanation: "When an array is passed to a function, it effectively decays into a pointer to its first element. The function signature can declare the parameter as `int arr[]` or `int *arr`.",
            output: "Sum of array elements: 15"
          },
          {
            title: "Array of Pointers (e.g., Array of Strings)",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    // An array of character pointers (array of strings)
    char *names[] = {
        "Alice",
        "Bob",
        "Charlie",
        "Diana"
    };
    int num_names = sizeof(names) / sizeof(names[0]);

    printf("List of names:\\n");
    for (int i = 0; i < num_names; i++) {
        printf("%d: %s (at address %p)\\n", i + 1, names[i], (void*)names[i]);
    }
    return 0;
}`),
            explanation: "`names` is an array where each element is a `char*` pointing to the first character of a string literal. String literals are usually stored in a read-only section of memory.",
            output: "(Addresses will vary)\nList of names:\n1: Alice (at address 0x400abc)\n2: Bob (at address 0x400ac2)\n3: Charlie (at address 0x400ac7)\n4: Diana (at address 0x400ad0)"
          },
          {
            title: "Difference Between `ptr++` and `(*ptr)++`",
            code: ensureStdioIncluded(
`#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30};
    int *ptr = arr;

    printf("Initial: *ptr = %d (points to arr[0])\\n", *ptr);

    (*ptr)++; // Increments the value pointed to by ptr (arr[0] becomes 11)
    printf("After (*ptr)++: *ptr = %d, arr[0] = %d\\n", *ptr, arr[0]);

    // Reset ptr to start of arr for clarity
    ptr = arr; 
    // arr[0] is already 11 from previous op, let's reset it to 10 for clear demo of *ptr++
    arr[0] = 10; 
    printf("Reset: *ptr = %d (points to arr[0]), arr[0] = %d\\n", *ptr, arr[0]);
    
    int val = *ptr++; // val gets *ptr (value at current location = 10), THEN ptr increments to point to arr[1]
    printf("After val = *ptr++: val = %d, *ptr (now points to arr[1]) = %d, arr[0] = %d\\n", val, *ptr, arr[0]);
    
    return 0;
}`),
            explanation: "`(*ptr)++` increments the value at the memory location `ptr` points to. `*ptr++` (due to operator precedence of `++` postfix being higher than `*`) first dereferences `ptr` for its value, then increments the pointer `ptr` itself to point to the next element.",
            output: "Initial: *ptr = 10 (points to arr[0])\nAfter (*ptr)++: *ptr = 11, arr[0] = 11\nReset: *ptr = 10 (points to arr[0]), arr[0] = 10\nAfter val = *ptr++: val = 10, *ptr (now points to arr[1]) = 20, arr[0] = 10"
          }
        ]
      },
      {
        id: "6-3",
        name: "Dynamic Memory Allocation (malloc, calloc, realloc, free)",
        explanation: "Dynamic memory allocation allows programs to request memory from the operating system at runtime (from a region called the heap), rather than having all memory needs fixed at compile time. This is crucial when the amount of memory needed isn't known beforehand or varies. Functions like `malloc`, `calloc`, and `realloc` are used to allocate memory, and `free` is used to release it back to the system, preventing memory leaks.",
        codeExamples: [
          {
            title: "`malloc` for a Single Integer and `free`",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <stdlib.h> // For malloc, free

int main() {
    int *ptr;

    // Allocate memory for one integer
    ptr = (int*) malloc(sizeof(int)); 

    if (ptr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1; // Exit with an error code
    }

    *ptr = 123; // Store a value in the allocated memory
    printf("Value stored in dynamically allocated memory: %d\\n", *ptr);
    printf("Address of allocated memory: %p\\n", (void*)ptr);

    free(ptr); // Deallocate the memory
    ptr = NULL; // Good practice: set pointer to NULL after freeing
    
    // Accessing ptr after free is undefined behavior
    // if(ptr != NULL) { /* This condition is now false */ }
    // else { printf("ptr is NULL after free and assignment.\\n"); }
    
    return 0;
}`),
            explanation: "`malloc(size)` allocates a block of `size` bytes and returns a `void*` pointer to it, or `NULL` if allocation fails. The returned pointer should be cast to the appropriate type. `free(ptr)` releases the memory block pointed to by `ptr`.",
            output: "(Address will vary)\nValue stored in dynamically allocated memory: 123\nAddress of allocated memory: 0x55aa1234abcd"
          },
          {
            title: "`malloc` for an Array of Integers",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 5; // Number of integers to allocate
    int *arr_ptr;

    // Allocate memory for 'n' integers
    arr_ptr = (int*) malloc(n * sizeof(int));

    if (arr_ptr == NULL) {
        printf("Memory allocation for array failed!\\n");
        return 1;
    }

    printf("Enter %d integers (or assign them directly):\\n", n);
    for (int i = 0; i < n; i++) {
        arr_ptr[i] = (i + 1) * 10; // Assign values directly for example
        // Or use scanf: scanf("%d", &arr_ptr[i]); or scanf("%d", arr_ptr + i);
    }

    printf("Array elements: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr_ptr[i]);
    }
    printf("\\n");

    free(arr_ptr); // Deallocate the entire block of memory
    arr_ptr = NULL;
    return 0;
}`),
            output: "Enter 5 integers (or assign them directly):\nArray elements: 10 20 30 40 50 \n"
          },
          {
            title: "`calloc` for an Array (Initializes to Zero)",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 3;
    float *f_arr;

    // Allocate memory for 'n' floats and initialize all bits to zero
    f_arr = (float*) calloc(n, sizeof(float));

    if (f_arr == NULL) {
        printf("calloc failed!\\n");
        return 1;
    }

    printf("Floats allocated by calloc (should be 0.0):\\n");
    for (int i = 0; i < n; i++) {
        printf("%.1f ", f_arr[i]); // Should print 0.0 for floats
    }
    printf("\\n");

    f_arr[1] = 3.14f;
    printf("After modification: %.1f %.1f %.1f\\n", f_arr[0], f_arr[1], f_arr[2]);

    free(f_arr);
    f_arr = NULL;
    return 0;
}`),
            explanation: "`calloc(num_elements, element_size)` allocates memory for an array of `num_elements`, each of `element_size` bytes. A key difference from `malloc` is that `calloc` initializes the allocated memory to all bits zero.",
            output: "Floats allocated by calloc (should be 0.0):\n0.0 0.0 0.0 \nAfter modification: 0.0 3.1 0.0"
          },
          {
            title: "Checking for Allocation Failure (NULL Pointer)",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <stdlib.h>
// #include <limits.h> // For ULONG_MAX if attempting truly huge allocations

int main() {
    // Request an unreasonably large amount of memory
    // The exact value for "unreasonably large" depends on system RAM and OS limits.
    // (size_t)-1 would be the largest possible size_t value.
    // size_t very_large_size = (size_t)-1 / 2; // Still extremely large
    size_t very_large_size = 1024UL * 1024 * 1024 * 50; // e.g. 50GB, likely to fail on most systems
    char *huge_block;

    printf("Attempting to allocate a very large block of memory (e.g., ~50GB)...\\n");
    huge_block = (char*) malloc(very_large_size);

    if (huge_block == NULL) {
        printf("SUCCESS (as expected): Memory allocation failed for huge block. malloc returned NULL.\\n");
        // Handle the error gracefully - e.g., exit, try smaller allocation, etc.
    } else {
        // This branch is highly unlikely to be hit for such a large request.
        printf("UNEXPECTED: Memory allocation succeeded for huge block! Freeing it now.\\n");
        free(huge_block); 
        huge_block = NULL;
    }
    return 0;
}`),
            explanation: "It's crucial to check the pointer returned by `malloc`, `calloc`, or `realloc`. If it's `NULL`, the allocation failed (e.g., due to insufficient memory), and attempting to use the `NULL` pointer will cause a crash.",
            output: "Attempting to allocate a very large block of memory (e.g., ~50GB)...\nSUCCESS (as expected): Memory allocation failed for huge block. malloc returned NULL."
          },
          {
            title: "`realloc` to Change Memory Size",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    // Allocate initial memory for a string
    char *str = (char*) malloc(10 * sizeof(char)); // For "Hello" + null
    if (str == NULL) { perror("Initial malloc failed"); return 1; }
    strcpy(str, "Hello");
    printf("Initial string: '%s', address: %p, capacity: 10 chars\\n", str, (void*)str);

    // Reallocate to a larger size
    char *temp_ptr = (char*) realloc(str, 20 * sizeof(char)); // For "Hello World!" + null
    
    if (temp_ptr == NULL) {
        printf("realloc failed! Original block at %p is still valid and allocated.\\n", (void*)str);
        // We should free the original block 'str' if realloc fails and we don't need it anymore.
        free(str); 
        str = NULL; // str is now dangling if not set to NULL
        perror("realloc failed");
        return 1;
    }
    // IMPORTANT: If realloc succeeds, the original 'str' pointer might be invalid.
    // Always use the pointer returned by realloc.
    str = temp_ptr; 

    strcat(str, " World!"); // Now str points to the (potentially new) 20-byte block
    printf("Resized string: '%s', address: %p, capacity: 20 chars\\n", str, (void*)str);

    free(str);
    str = NULL;
    return 0;
}`),
            explanation: "`realloc(ptr, new_size)` changes the size of the memory block pointed to by `ptr` to `new_size`. It may move the block to a new location. If `realloc` fails, it returns `NULL`, and the original block (`ptr`) remains allocated and valid. The content of the block is preserved up to the minimum of the old and new sizes.",
            output: "(Addresses will vary, and may or may not change after realloc)\nInitial string: 'Hello', address: 0x56aabbcc00, capacity: 10 chars\nResized string: 'Hello World!', address: 0x56aabbdd11, capacity: 20 chars"
          },
          {
            title: "Memory Leak (Forgetting to `free`) - Conceptual",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <stdlib.h>

void create_leak() {
    int *leaky_ptr = (int*) malloc(sizeof(int));
    if (leaky_ptr == NULL) {
        printf("Malloc failed in create_leak\\n");
        return;
    }
    *leaky_ptr = 100;
    printf("Inside create_leak, leaky_ptr (%p) points to %d\\n", (void*)leaky_ptr, *leaky_ptr);
    // Forgetting to call free(leaky_ptr) here causes a memory leak
    // when create_leak() returns, as 'leaky_ptr' (the local pointer variable) is lost,
    // but the memory it pointed to remains allocated.
}

int main() {
    printf("Demonstrating a memory leak conceptually.\\n");
    create_leak(); 
    // The memory allocated in create_leak is now inaccessible but still allocated.
    create_leak(); 
    // Another block of memory is leaked.
    
    printf("If 'free' is not called for dynamically allocated memory that is no longer referenced,\\n");
    printf("that memory remains allocated until the program terminates,\\n");
    printf("leading to a 'memory leak'. Use tools like Valgrind to detect leaks.\\n");
    return 0;
}`),
            explanation: "A memory leak occurs when dynamically allocated memory is no longer needed by the program (i.e., no valid pointers reference it) but is not deallocated (freed). The program loses all means to access or free that memory. Over time, leaks can consume all available memory, crashing the program or system.",
            output: "(Addresses will vary)\nDemonstrating a memory leak conceptually.\nInside create_leak, leaky_ptr (0x55eeff00) points to 100\nInside create_leak, leaky_ptr (0x55eeff11) points to 100\nIf 'free' is not called for dynamically allocated memory that is no longer referenced,\nthat memory remains allocated until the program terminates,\nleading to a 'memory leak'. Use tools like Valgrind to detect leaks."
          }
        ]
      }
    ]
  },
  {
    id: "module-12", // Assuming this was meant to be Module 7 or a continuation. Renumbering for consistency might be good later.
    title: "From C Expert to Legend",
    level: ModuleLevel.EXPERT,
    tagline: "Pushing the boundaries of C and system software.",
    // icon: ExpertIcon, // Removed
    description: "Explore advanced system programming, contribute to open-source C projects, and delve into the intricacies of compilers and operating systems.",
    expertInsight: "Reaching C legend status means not just knowing the language, but understanding how it interacts with the system at a deep level, and using that knowledge to build robust, efficient, and impactful software.",
    topics: [
      {
        id: "12-1", // Should be e.g. 7-1
        name: "Advanced System Programming",
        explanation: "Advanced system programming in C involves interacting directly with the operating system's services. This includes file system operations, process management (creating and controlling processes), inter-process communication (IPC for processes to exchange data), signal handling (managing asynchronous events), and network programming (creating applications that communicate over networks). C's low-level capabilities make it ideal for these tasks. These examples are often platform-dependent (POSIX for Linux/macOS, Windows API for Windows).",
        codeExamples: [
          {
            title: "Basic File I/O (fopen, fprintf, fgets, fclose)",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <stdlib.h> // For exit() if used, and general utilities

int main() {
    FILE *fptr;
    char text_to_write[] = "Hello from C file I/O!";
    char buffer[100];

    // Write to a file
    fptr = fopen("myfile.txt", "w"); // "w" for write mode
    if (fptr == NULL) {
        perror("Error opening file for writing"); // Good practice to use perror
        return 1; // Indicate an error
    }
    fprintf(fptr, "%s\\n", text_to_write);
    fprintf(fptr, "Another line with number: %d\\n", 123);
    fclose(fptr); // Always close files
    printf("Wrote to myfile.txt\\n");

    // Read from a file
    fptr = fopen("myfile.txt", "r"); // "r" for read mode
    if (fptr == NULL) {
        perror("Error opening file for reading");
        return 1;
    }
    printf("Reading from myfile.txt:\\n");
    while (fgets(buffer, sizeof(buffer), fptr) != NULL) { // fgets is safer for reading lines
        printf("%s", buffer); // fgets includes newline if it fits
    }
    if (ferror(fptr)) {
        perror("Error reading file");
    }
    fclose(fptr);
    return 0;
}`),
            explanation: "Standard I/O functions from `<stdio.h>` like `fopen`, `fprintf`, `fgets`, and `fclose` are used for file operations. `perror` can print system error messages. `fgets` is generally safer than `fscanf` for reading strings from files.",
            output: "Wrote to myfile.txt\nReading from myfile.txt:\nHello from C file I/O!\nAnother line with number: 123\n"
          },
          {
            title: "Concept: Process Creation with fork() (POSIX)",
            code: ensureStdioIncluded( // fork itself doesn't need stdio, but printf does
`#include <stdio.h>
#include <unistd.h> // For fork(), getpid(), getppid() (POSIX)
#include <sys/types.h> // For pid_t (POSIX)
// #include <sys/wait.h> // For wait()

int main() {
    pid_t pid;
    printf("This example is POSIX-specific (Linux/macOS).\\n");
    printf("On Windows, CreateProcess() is used for similar functionality.\\n");

    // The actual fork call is commented out to prevent execution in simple test environments.
    // To test, uncomment on a POSIX system (Linux, macOS).
    /*
    pid = fork(); 

    if (pid < 0) {
        perror("fork failed");
        return 1;
    } else if (pid == 0) {
        // Child process
        printf("Child Process: PID=%d, Parent PID=%d\\n", getpid(), getppid());
        // Child can do some work here, e.g., exec another program
        // exit(0); // Child exits
    } else {
        // Parent process
        printf("Parent Process: PID=%d, Created child with PID=%d\\n", getpid(), pid);
        // int status;
        // wait(&status); // Parent waits for child to finish
        // printf("Parent: Child process finished.\\n");
    }
    */
    printf("Conceptual fork() example. Real execution on POSIX systems requires uncommenting fork().\\n");
    return 0;
}`),
            explanation: "`fork()` (POSIX systems like Linux/macOS) creates a new process (child) that is a duplicate of the calling process (parent). `fork()` returns 0 to the child process and the child's PID to the parent, or -1 on error.",
            output: "This example is POSIX-specific (Linux/macOS).\nOn Windows, CreateProcess() is used for similar functionality.\nConceptual fork() example. Real execution on POSIX systems requires uncommenting fork()."
          },
          {
            title: "Concept: Inter-Process Communication - Pipes (POSIX)",
            code: ensureStdioIncluded( // For printf
`#include <stdio.h>
#include <unistd.h> // For pipe(), read(), write(), fork() (POSIX)
#include <string.h> // For strlen()
#include <sys/types.h> // For pid_t
// #include <sys/wait.h> // For wait()

#define MSG_SIZE 50

int main() {
    printf("This pipe example is POSIX-specific (Linux/macOS).\\n");
    // The actual pipe/fork calls are commented out.
    /*
    int fd[2]; // File descriptors for the pipe: fd[0] for read, fd[1] for write
    char write_msg[MSG_SIZE] = "Hello from parent via pipe!";
    char read_buffer[MSG_SIZE];
    pid_t pid;

    if (pipe(fd) == -1) { // Create the pipe
        perror("Pipe failed");
        return 1;
    }
    
    pid = fork(); // Create a child process
    if (pid < 0) { 
        perror("Fork failed"); 
        return 1; 
    }

    if (pid > 0) { // Parent process
        close(fd[0]); // Parent closes its unused read end of the pipe
        printf("Parent (PID %d): Writing to pipe...\\n", getpid());
        write(fd[1], write_msg, strlen(write_msg) + 1); // +1 for null terminator
        close(fd[1]); // Parent closes its write end
        // wait(NULL); // Wait for child to finish
        printf("Parent: Finished.\\n");
    } else { // Child process (pid == 0)
        close(fd[1]); // Child closes its unused write end of the pipe
        printf("Child (PID %d): Reading from pipe...\\n", getpid());
        ssize_t bytes_read = read(fd[0], read_buffer, MSG_SIZE);
        if (bytes_read > 0) {
             printf("Child received: '%s' (%zd bytes)\\n", read_buffer, bytes_read);
        } else if (bytes_read == 0) {
             printf("Child: Pipe closed by writer (EOF).\\n");
        } else {
             perror("Child: Read from pipe failed");
        }
        close(fd[0]); // Child closes its read end
        // exit(0);
    }
    */
    printf("Conceptual pipe IPC example. Real execution on POSIX systems requires uncommenting.\\n");
    return 0;
}`),
            explanation: "Pipes (POSIX) provide a unidirectional communication channel between related processes (e.g., parent and child created via `fork`). One process writes to one end of the pipe, the other reads from the other end.",
            output: "This pipe example is POSIX-specific (Linux/macOS).\nConceptual pipe IPC example. Real execution on POSIX systems requires uncommenting."
          },
          {
            title: "Basic Signal Handling (SIGINT - Ctrl+C) (POSIX)",
            code: ensureStdioIncluded( // For printf
`#include <stdio.h>
#include <signal.h> // For signal(), SIGINT (POSIX)
#include <stdlib.h> // For exit()
#include <unistd.h> // for sleep()

// Global flag for handler (simple example, not always best practice for complex apps)
volatile sig_atomic_t keep_running = 1; 

void sigint_handler(int signum) {
    // Signal handlers should be reentrant and do minimal work.
    // Setting a flag is generally safer than calling printf directly in a handler.
    // However, for a simple demo, printf can be used cautiously.
    // Write is async-signal-safe, printf is not strictly.
    // char msg[] = "\\nCaught SIGINT. Exiting gracefully.\\n";
    // write(STDOUT_FILENO, msg, sizeof(msg)-1);
    printf("\\nCaught signal %d (SIGINT - Ctrl+C). Setting flag to exit.\\n", signum);
    keep_running = 0;
    // exit(signum); // Alternatively, exit directly, but flag allows cleanup in main loop.
}

int main() {
    printf("This signal handling example is POSIX-specific.\\n");
    // Register the signal handler for SIGINT
    if (signal(SIGINT, sigint_handler) == SIG_ERR) {
        perror("Failed to register SIGINT handler");
        return 1;
    }

    printf("Program running (PID: %d). Press Ctrl+C to send SIGINT.\\n", getpid());
    
    int i = 0;
    while(keep_running) { // Loop until signal handler changes the flag
        printf("Working... %d\\r", i++);
        fflush(stdout); // Ensure output is displayed immediately
        sleep(1); // Pause for 1 second
        if (i > 10 && keep_running) { // Auto-stop after some time for non-interactive tests
            // printf("\\nAuto-stopping after 10 iterations for demo purposes.\\n");
            // keep_running = 0; 
        }
    }
    printf("\\nExiting main loop due to signal or auto-stop. Performing cleanup... Done.\\n");
    return 0;
}`),
            explanation: "Signal handling allows a program to respond to asynchronous events (signals) sent by the OS or other processes. `signal()` (POSIX) registers a handler function for a specific signal like `SIGINT` (interrupt, usually from Ctrl+C). It's often safer for handlers to set a flag processed by the main loop.",
            output: "This signal handling example is POSIX-specific.\nProgram running (PID: ...). Press Ctrl+C to send SIGINT.\nWorking... 0\rWorking... 1\r...\n(User presses Ctrl+C)\nCaught signal 2 (SIGINT - Ctrl+C). Setting flag to exit.\nExiting main loop due to signal or auto-stop. Performing cleanup... Done."
          },
          {
            title: "Working with Environment Variables (getenv)",
            code: ensureStdioIncluded(
`#include <stdio.h>
#include <stdlib.h> // For getenv()

int main() {
    char *path_var;
    char *home_var;
    char *non_existent_var;

    path_var = getenv("PATH"); // Get value of PATH environment variable
    if (path_var != NULL) {
        // Be careful: PATH can be very long. Print only a part for demo.
        printf("First ~50 chars of PATH: %.50s...\\n", path_var);
    } else {
        printf("PATH environment variable not found.\\n");
    }

    // On POSIX systems, HOME is common. On Windows, USERPROFILE.
    home_var = getenv("HOME"); 
    if (home_var == NULL) { // If HOME is not found, try USERPROFILE (for Windows)
        home_var = getenv("USERPROFILE");
    }

    if (home_var != NULL) {
        printf("Home directory (HOME/USERPROFILE): %s\\n", home_var);
    } else {
        printf("HOME or USERPROFILE environment variable not found.\\n");
    }
    
    non_existent_var = getenv("MY_VERY_UNIQUE_CUSTOM_VAR_XYZ123");
    if (non_existent_var == NULL) {
        printf("MY_VERY_UNIQUE_CUSTOM_VAR_XYZ123 not found (as expected).\\n");
    } else {
        printf("MY_VERY_UNIQUE_CUSTOM_VAR_XYZ123 was found: %s\\n", non_existent_var);
    }

    return 0;
}`),
            explanation: "`getenv()` retrieves the value of an environment variable. Environment variables provide configuration information to processes.",
            output: "(Output varies greatly by system)\nFirst ~50 chars of PATH: /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:...\nHome directory (HOME/USERPROFILE): /home/user\nMY_VERY_UNIQUE_CUSTOM_VAR_XYZ123 not found (as expected)."
          },
          {
            title: "Basic Socket Programming Concept (TCP Client - Conceptual Flow)",
            code: ensureStdioIncluded( // For printf
`#include <stdio.h>
// For actual socket programming, you'd include platform-specific headers:
// POSIX (Linux/macOS): <sys/socket.h>, <netinet/in.h>, <arpa/inet.h>, <unistd.h>
// Windows: <winsock2.h>, <ws2tcpip.h> (and link Ws2_32.lib)

int main() {
    printf("Conceptual TCP Client Socket Flow (highly simplified):\\n");
    printf("1. Initialize network library (e.g., WSAStartup() on Windows - not needed on POSIX).\\n");
    printf("2. Create a socket: socket_fd = socket(AF_INET, SOCK_STREAM, 0)\\n");
    printf("   AF_INET for IPv4, SOCK_STREAM for TCP. Check for errors.\\n");
    printf("3. Define server address structure (e.g., struct sockaddr_in server_addr):\\n");
    printf("   Set server_addr.sin_family = AF_INET;\\n");
    printf("   Set server_addr.sin_port = htons(SERVER_PORT); // Convert port to network byte order\\n");
    printf("   Convert IP string to network address: inet_pton(AF_INET, \\"SERVER_IP\\", &server_addr.sin_addr);\\n");
    printf("4. Connect to server: connect(socket_fd, (struct sockaddr*)&server_addr, sizeof(server_addr))\\n");
    printf("   Check for errors.\\n");
    printf("5. Send data: send(socket_fd, message, strlen(message), 0) or write()\\n");
    printf("   Check bytes sent and handle errors/partial sends.\\n");
    printf("6. Receive data: recv(socket_fd, buffer, sizeof(buffer)-1, 0) or read()\\n");
    printf("   Null-terminate buffer. Check bytes received for EOF or errors.\\n");
    printf("7. Close the socket: close(socket_fd) (POSIX) or closesocket(socket_fd) (Windows)\\n");
    printf("8. Clean up network library (e.g., WSACleanup() on Windows).\\n");
    printf("\\nActual implementation is more complex, involving extensive error handling, specific headers, byte ordering, etc.\\n");
    return 0;
}`),
            explanation: "Socket programming enables network communication. This shows a highly simplified conceptual flow for a TCP client. Actual code involves specific headers, detailed struct setup, extensive error checking, and byte ordering considerations (endianness using `htons`, `htonl`, etc.).",
            output: "Conceptual TCP Client Socket Flow (highly simplified):\n1. Initialize network library (e.g., WSAStartup() on Windows - not needed on POSIX).\n2. Create a socket: socket_fd = socket(AF_INET, SOCK_STREAM, 0)\n   AF_INET for IPv4, SOCK_STREAM for TCP. Check for errors.\n3. Define server address structure (e.g., struct sockaddr_in server_addr):\n   Set server_addr.sin_family = AF_INET;\n   Set server_addr.sin_port = htons(SERVER_PORT); // Convert port to network byte order\n   Convert IP string to network address: inet_pton(AF_INET, \"SERVER_IP\", &server_addr.sin_addr);\n4. Connect to server: connect(socket_fd, (struct sockaddr*)&server_addr, sizeof(server_addr))\n   Check for errors.\n5. Send data: send(socket_fd, message, strlen(message), 0) or write()\n   Check bytes sent and handle errors/partial sends.\n6. Receive data: recv(socket_fd, buffer, sizeof(buffer)-1, 0) or read()\n   Null-terminate buffer. Check bytes received for EOF or errors.\n7. Close the socket: close(socket_fd) (POSIX) or closesocket(socket_fd) (Windows)\n8. Clean up network library (e.g., WSACleanup() on Windows).\n\nActual implementation is more complex, involving extensive error handling, specific headers, byte ordering, etc."
          }
        ]
      },
      {
        id: "12-2", // Should be 7-2
        name: "Contributing to Open Source",
        explanation: "Contributing to open-source C projects is a great way to hone your skills, learn from experienced developers, and give back to the community. It involves finding projects, understanding their codebase and contribution guidelines, fixing bugs, adding features, improving documentation, and participating in code reviews. Platforms like GitHub host countless C projects looking for contributors.",
        codeExamples: [
          {
            title: "Step 1: Finding Projects",
            code:
`// Platforms: GitHub, GitLab, SourceForge, Gitea, etc.
// Search terms: "C language", "systems programming", "embedded C", "linux kernel module c"
// Labels to look for: "good first issue", "help wanted", "beginner", "documentation"
//
// Consider projects you use or are interested in:
// - Core utilities (grep, sed, awk implementations)
// - Libraries (e.g., zlib, libpng, OpenSSL - advanced)
// - Smaller tools or games
// - Embedded projects (e.g., firmware for microcontrollers)
//
// Start by reading the project's README and documentation.`,
            explanation: "Identify projects that align with your interests and current skill level. Many projects welcome newcomers and have issues specifically tagged for them.",
          },
          {
            title: "Step 2: Understanding Contribution Guidelines & Code of Conduct",
            code:
`// Look for files like:
// - CONTRIBUTING.md (or .rst, .txt)
// - PULL_REQUEST_TEMPLATE.md
// - ISSUE_TEMPLATE.md
// - CODE_OF_CONDUCT.md
//
// These files explain:
// - How to set up the development environment.
// - Required C standards (e.g., C99, C11), compiler versions.
// - Coding style (e.g., K&R, Allman, GNU) and linting tools.
// - Testing procedures.
// - How to submit patches (e.g., via email for some projects like Linux kernel) or pull requests.
// - Communication channels (mailing lists, IRC, Discord, Matrix, forums).
//
// Adherence is key for your contribution to be accepted.`,
            explanation: "Most established open-source projects have clear guidelines for contributing. Reading and following these is crucial.",
          },
          {
            title: "Step 3: Setting Up Your Environment & Getting the Code",
            code:
`// 1. Install necessary tools:
//    - C compiler (GCC, Clang)
//    - Build system (Make, CMake, Meson, Autotools)
//    - Version Control System (Git is most common)
//    - Debugger (GDB, LLDB)
//    - Any project-specific dependencies (libraries, tools).
//
// 2. Fork the repository (if on GitHub/GitLab etc.): This creates your personal copy.
//
// 3. Clone your fork locally:
//    git clone https://github.com/YOUR_USERNAME/PROJECT_NAME.git
//    cd PROJECT_NAME
//
// 4. Add the original project repository as an "upstream" remote:
//    git remote add upstream https://github.com/ORIGINAL_OWNER/PROJECT_NAME.git
//    git fetch upstream // Get refs from upstream`,
            explanation: "Ensure you have the right tools and a local copy of the codebase to work on. Keeping your fork in sync with the upstream project is important.",
          },
          {
            title: "Step 4: Making Changes in a New Branch",
            code:
`// Always work on a new branch for each distinct feature or bug fix.
// This keeps your changes isolated and easier to manage.
//
// // Sync your local main/master with upstream before creating a new branch:
// git checkout main  // or master, depending on project
// git fetch upstream
// git rebase upstream/main // or git merge upstream/main
// git push origin main     // Optional: update your fork's main branch
//
// // Create and switch to a new branch:
// git checkout -b fix/issue-123-buffer-overflow
// // or for a feature:
// git checkout -b feature/add-new-config-option
//
// // Now, make your code changes...`,
            explanation: "Using feature branches is a standard Git workflow that simplifies collaboration and code review.",
          },
          {
            title: "Step 5: Committing, Testing, and Pushing Changes",
            code:
`// Write your code, adhering to the project's style.
// Add or modify tests for your changes.
// Update documentation if necessary.
//
// // Build and test locally:
// make // or cmake, ./configure && make, etc.
// make test // or ctest, etc.
//
// // Stage your changes:
// git add src/module/file.c include/header.h tests/new_test.c
//
// // Commit your changes with a clear, descriptive message:
// // (Many projects have commit message format guidelines)
// git commit -s -m "Fix: Prevent null pointer dereference in process_data()"
// git commit -s -m "Feat: Implement --verbose flag for detailed logging"
// // The -s flag adds a Signed-off-by line, often required.
//
// // Push your branch to your fork:
// git push origin fix/issue-123-buffer-overflow`,
            explanation: "Write quality code, test thoroughly, and make clear, atomic commits. Push your branch to your fork on the hosting platform.",
          },
          {
            title: "Step 6: Submitting a Pull Request (PR) / Merge Request (MR)",
            code:
`// Go to the original project's repository page on GitHub/GitLab.
// You should see a prompt to create a Pull Request from your recently pushed branch.
//
// When creating the PR:
// - Write a clear title summarizing the change.
// - Provide a detailed description:
//   - What problem does it solve? (Link to issues, e.g., "Fixes #123")
//   - How was it solved? (Brief overview of your approach)
//   - How was it tested?
// - If there's a PR template, fill it out.
// - Be prepared for code review:
//   - Maintainers may ask questions or request changes.
//   - Respond politely and address feedback.
//   - You might need to push more commits to your branch to update the PR.
//
// Patience and good communication are key!`,
            explanation: "A Pull Request is your formal proposal to merge your changes into the main project. The review process is a learning opportunity.",
          }
        ]
      }
    ]
  }
];
