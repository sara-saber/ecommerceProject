
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DetailsService } from './services/details.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent implements OnInit {

  id: string = ''
  ngOnInit(): void {
    this.route.params.subscribe(x => this.id = x['id'])
  }
  constructor(private route: ActivatedRoute,private detailService:DetailsService) {
    this.detailService.productId.subscribe()
  }

}
