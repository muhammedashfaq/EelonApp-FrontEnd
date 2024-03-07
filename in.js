let invoiceCounter = 1;

const printBill = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const invoiceNumber = `INV-${year}${month}${day}-${invoiceCounter}`;

    // Increment the invoiceCounter for the next invoice
    invoiceCounter++;

    console.log('Invoice Number:', invoiceNumber);
};

// Example usage
printBill(); // Output: Invoice Number: INV-20240306-1
printBill(); // Output: Invoice Number: INV-20240306-2
printBill(); // Output: Invoice Number: INV-20240306-3
