
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  
  async deleteGrupoById() {
    // deleta um grupo pelo id
  /*   return await this.http
      .delete(this.baseUrl + "/grupos/"+id)
      .pipe(catchError(this.handleError))
      .toPromise(); */
    
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  private handleError(error: HttpErrorResponse) {
    // TODO: consultar se o erro 404 vai indicar que um colaborador nao foi encontrado ou se o endpoint nao foi encontrado
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError("Something bad happened; please try again later.");
  }

}