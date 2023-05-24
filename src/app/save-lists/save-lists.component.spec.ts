import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveListsComponent } from './save-lists.component';

describe('SaveListsComponent', () => {
  let component: SaveListsComponent;
  let fixture: ComponentFixture<SaveListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
