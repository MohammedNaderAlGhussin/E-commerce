import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex-center flex-col">
        <div className="flex my-2">
          <p className="mr-2">
            made with ❤️ by
            <a
              className="font-bold hover:text-primary transition-primary ml-1"
              href="https://github.com/MohammedNaderAlGhussin"
              target="_blank"
            >
              Mohammednader AlGhussin
            </a>
          </p>
        </div>
        <div>
          © {currentYear} {APP_NAME}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
