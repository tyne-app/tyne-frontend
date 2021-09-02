import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: "safeHtml" })
export class SafeHtmlPipe {
  public constructor(private sanitizer: DomSanitizer) {}

  public transform(html) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }
}
