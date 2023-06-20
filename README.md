# basic-calculator

Started 6/17/23 (OP)

A Calculator that can add, subtract, divide, or multiply. It does not follow the PEMDAS order of operations.

How It Works???
1. The User will input any combination of numbers that will be stored in an array (Preprocess).
2. When the User clicks an operator, the array's contents will be joined and pushed to another array (FinalProcess)
3. The program will then check if the last item in the array is an operator.
4. If it is not the operator will be pushed to the FinalProcess array.
5. If so, the last item in the FinalProcess array will be removed and replaced by the current operator.
6. If the User presses C, the last item in the FinalProcess array will be removed.
7. If the User presses AC, all the items in the FinalProcess array will be removed.
8. If the User presses =, A function will evaluate the items.
