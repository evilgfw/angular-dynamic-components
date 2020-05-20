import {
  Component,
  ComponentFactoryResolver,
  Injector,
  NgModuleFactoryLoader,
  OnInit,
  SkipSelf,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './deprecated-string-loader.component.html',
  styleUrls: ['./deprecated-string-loader.component.scss']
})
export class DeprecatedStringLoaderComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef, static: true }) vc;


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

  widgets = [
    { name: 'quote-note', path: 'src/app/quote-note/quote-note.module#QuoteNoteModule', data: this.quote },
    { name: 'graph-note', path: 'src/app/graph-note/graph-note.module#GraphNoteModule', data: this.color },
  ];

  constructor(
    @SkipSelf() private injector: Injector,
    private loader: NgModuleFactoryLoader) {
  }

  ngOnInit() {
  }

  addWidget(widget) {
    this.loader.load(widget.path)
      .then((factory) => {
        const moduleRef = factory.create(this.injector);
        const componentFactoryResolver = moduleRef.componentFactoryResolver;
        const widgets = moduleRef.injector.get('widgets');

        // Component Type
        const componentFactory = componentFactoryResolver.resolveComponentFactory(widgets[0][0].component);
        const componentRef = componentFactory.create(this.injector);

        this.vc.insert(componentRef.hostView);

        this.setData(widget, componentRef);
      });
  }

  setData(widget, componentRef) {
    if (Array.isArray(widget.data)) {
      (<any>componentRef.instance).data = widget.data.map(x => ({... x}) );
    } else {
      (<any>componentRef.instance).data = { ... widget.data };
    }
  }
}
