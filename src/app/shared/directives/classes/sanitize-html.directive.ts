import { Directive, HostBinding, Input } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Directive({
  selector: "[sanitizeHtml]",
})
export class SanitizeHtmlDirective {
  @Input()
  public sanitizeHtml: string;

  public constructor(private sanitizer: DomSanitizer) {}

  @HostBinding("innerHtml")
  public get innerHtml(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.sanitizeHtml);
  }
}
