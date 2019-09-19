# NgRx Star Wars

## Instructions:
1. Clone
2. Chackout `00-setup`
3. Run `yarn`
4. Run `yarn start`

## Steps:
1. Create app `ng new ngrx-sw --prefix ngsw --routing --style scss`
2. Add material `ng add @angular/material`
3. Set component schematic CD to "OnPush"
4. Create heroes module and routed component `ng g m heroes --module app.module --route heroes`
5. Generate a few components and service
  `ng g c heroes/search-heroes-box`
  `ng g c heroes/heroes-list`
  `ng g c heroes/heroes-list-item`
  `ng g s heroes/heroes`
6. Add dependencies `yarn add @ngrx/{store,effects,entity,store-devtools}`
7. Set ngrx schematics as default - `ng add @ngrx/schematics`
  ```json
  "@ngrx/schematics:component": {
    "styleext": "scss",
    "changeDetection": "OnPush"
  }
  ```

8. Generate root store `ng g store State --root --module app.module.ts --statePath shared/store`
9. Generate root effects `ng g effect app --root --module app.module.ts --group`
10. Add router store `ng add @ngrx/router-store`
11. `ng g store heroes/Heroes --module heroes.module.ts`
12. `ng g action heroes/Heroes --group`
13.
