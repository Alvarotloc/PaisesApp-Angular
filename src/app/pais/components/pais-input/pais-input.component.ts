import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

  debouncer: Subject<string> = new Subject<string>();
  public termino: string = '';
  public buscar() {
    this.onEnter.emit(this.termino);
  }

  public teclaPresionada() {
    this.debouncer.next(this.termino);
  }

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(500)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }
}
