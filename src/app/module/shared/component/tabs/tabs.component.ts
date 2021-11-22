import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  public selectedIndex: number = 0;
  navTabs!: any[];
  pageView: any = 0;

  activeLinkIndex: number = -1;
  isActiveTab: boolean = false;
  @ViewChild(MatTabGroup, { static: true })
  tabGroup!: MatTabGroup;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      if (data['index'] && (data['index'] === '0' || data['index'] === '1')) {
        this.tabGroup.selectedIndex = data['index'];
        this.isActiveTab = true;
       
      } else {
        this.isActiveTab = false;
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { index: '0' },
          queryParamsHandling: 'merge',
        });
      }

      if (data['index'] == 0) {
        this.router.navigate(['/home'], {
          queryParams: { index: data['index'] },
        });
        
      } else if (data['index'] == 1) {
        this.router.navigate(['/my-products'], {
          queryParams: { index: data['index'] },
        });
      }
    });
  }

  tabChanged(event: MatTabChangeEvent) {
    // this.locationreload();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { index: event.index },
      queryParamsHandling: 'merge',
    });
    
  }
}
