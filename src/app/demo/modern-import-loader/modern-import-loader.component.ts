import {
  Component,
  ComponentFactoryResolver,
  Injector,
  NgModuleFactoryLoader,
  OnInit,
  SkipSelf, Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './modern-import-loader.component.html',
  styleUrls: ['./modern-import-loader.component.scss']
})
export class ModernImportLoaderComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef, static: true }) vc;

  widgets = [ ];

  quote = {
    text: `
The same wind blows on us all.
The difference in arrival is not
the blowing of the wind,
but the set of the sail.`,
    name: 'Jim Rohn'
  };

  color = [
    { value: 40, color: 'red' },
    { value: 70, color: 'green' },
    { value: 30, color: 'blue' }
  ];

  constructor(
    @SkipSelf() private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  loadWidgets() {

    import('src/app/quote-note/quote-note.module').then(module => {
      this.widgets.push({
        name: 'quote-note',
        moduleClass: module.QuoteNoteModule,
        componentClass: module.QuoteNoteModule.defaultComponent,
        data: this.quote,
      });
    });

    import('src/app/graph-note/graph-note.module').then(module => {
      this.widgets.push({
        name: 'graph-note',
        moduleClass: module.GraphNoteModule,
        componentClass: module.GraphNoteModule.defaultComponent,
        data: this.color,
      });
    });
  }

  ngOnInit() {
  }

  addWidget(widget) {
    if (Array.isArray(widget.data)) {
      this.addComponent(widget.componentClass, widget.data.map(x => ({... x}) ));
    } else {
      this.addComponent(widget.componentClass, { ... widget.data } );
    }
  }

  addComponent(componentType: Type<any>, data: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const componentRef = this.vc.createComponent(componentFactory);
    (<any>componentRef.instance).data = data;
  }
}
