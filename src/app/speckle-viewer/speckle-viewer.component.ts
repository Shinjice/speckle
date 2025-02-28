import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  Viewer,
  DefaultViewerParams,
  SpeckleLoader,
  UrlHelper,
} from '@speckle/viewer';
import { CameraController, SelectionExtension } from '@speckle/viewer';

@Component({
  selector: 'app-speckle-viewer',
  standalone: false,
  templateUrl: './speckle-viewer.component.html',
  styleUrl: './speckle-viewer.component.css'
})
export class SpeckleViewerComponent implements OnInit {
  ngOnInit(): void {
    this.createViewer();
  }

  @ViewChild('renderer') renderer!: ElementRef;


  public async createViewer(){
    const container = this.renderer as unknown as HTMLElement;

  /** Configure the viewer params */
  const params = DefaultViewerParams;
  params.showStats = false;
  params.verbose = true;

  /** Create Viewer instance */
  const viewer = new Viewer(container, params);
  /** Initialise the viewer */
  await viewer.init();

  /** Add the stock camera controller extension */
  viewer.createExtension(CameraController);
  /** Add the selection extension for extra interactivity */
  viewer.createExtension(SelectionExtension);

  /** Create a loader for the speckle stream */
  const urls = await UrlHelper.getResourceUrls(
    'https://app.speckle.systems/projects/24c98619ac/models/38639656b8'
  );
  for (const url of urls) {
    const loader = new SpeckleLoader(viewer.getWorldTree(), url, '');
    /** Load the speckle data */
    await viewer.loadObject(loader, true);
  }
  }

}
