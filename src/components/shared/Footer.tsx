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
                <a href="#" className="hover:text-foreground transition-colors">
                  How it works
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Pricing
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Examples
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-sm">Support</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Help Center
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-border gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 skilltree. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
