// ShadCn
import { toast } from "@/components/ui/use-toast";

const useToasts = () => {
    const newInvoiceSuccess = () => {
        toast({
            variant: "default",
            title: "Generated new invoice",
            description: "Successfully created a new invoice",
        });
    };

    const pdfGenerationSuccess = () => {
        toast({
            variant: "default",
            title: "Your invoice has been generated!",
            description:
                "You can preview, download, or save it from the actions tab",
        });
    };

    const saveInvoiceSuccess = () => {
        toast({
            variant: "default",
            title: "Saved Invoice",
            description: "Your invoice details are saved now",
        });
    };

    const modifiedInvoiceSuccess = () => {
        toast({
            variant: "default",
            title: "Modified Invoice",
            description: "Successfully modified your invoice",
        });
    };

    const importInvoiceError = () => {
        toast({
            variant: "destructive",
            title: "Error",
            description: "Something went importing the invoice. Make sure the file is a valid InvoiceHaul JSON export",
        });
    };

    return {
        newInvoiceSuccess,
        pdfGenerationSuccess,
        saveInvoiceSuccess,
        modifiedInvoiceSuccess,
        importInvoiceError,
    };
};

export default useToasts;
