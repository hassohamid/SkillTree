import { ArrowRight, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-3">
            <img src="croplogo.png" alt="SkillTree" className="h-15 w-13" />
            <p className="text-sm text-muted-foreground max-w-sm">
              Turn your learning goals into structured roadmaps with AI-powered
              precision.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-sm">Product</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a
                  href="#"
                  className="group flex items-center gap-1 hover:text-foreground transition-colors w-fit"
                >
                  How it works
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-1 hover:text-foreground transition-colors w-fit"
                >
                  Pricing
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-1 hover:text-foreground transition-colors w-fit"
                >
                  Examples
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </a>
              </div>
            </div>{" "}
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-sm">Support</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a
                  href="#"
                  className="group flex items-center gap-1 hover:text-foreground transition-colors w-fit"
                >
                  FAQ
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-1 hover:text-foreground transition-colors w-fit"
                >
                  Contact
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-1 hover:text-foreground transition-colors w-fit"
                >
                  Help Center
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </a>
              </div>
            </div>{" "}
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-sm">Socials</h3>

              <div className="flex items-center gap-3 md:hidden">
                <a
                  href="#"
                  className="group p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
                <a
                  href="#"
                  className="group p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="X"
                >
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="group p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>{" "}
                <a
                  href="#"
                  className="group p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="group p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Discord"
                >
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z" />
                  </svg>
                </a>
              </div>

              <div className="hidden md:flex flex-col gap-2 text-sm text-muted-foreground">
                <a
                  href="#"
                  className="group flex items-center gap-1 hover:text-foreground transition-colors w-fit"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </a>{" "}
                <a
                  href="#"
                  className="group flex items-center gap-1 hover:text-foreground transition-colors w-fit"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </a>{" "}
                <a
                  href="#"
                  className="group flex items-center gap-1 hover:text-foreground transition-colors w-fit"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                  </svg>
                  Facebook
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-1 hover:text-foreground transition-colors w-fit"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z" />
                  </svg>
                  Discord
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-1 hover:text-foreground transition-colors w-fit"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                  X
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-border gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 skilltree. All rights reserved.
          </p>{" "}
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a
              href="#"
              className=" flex items-center gap-1 hover:text-foreground transition-colors"
            >
              Privacy Policy
            
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              Terms of Service
             
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
