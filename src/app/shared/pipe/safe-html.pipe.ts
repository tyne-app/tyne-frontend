import { Pipe } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Pipe({ name: "safeHtml" })
export class SafeHtmlPipe {
  public constructor(private sanitizer: DomSanitizer) {}

  public transform(html): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }
}
