'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-af98d03c1fb71a3570896a7f5629c48d"' : 'data-target="#xs-components-links-module-AppModule-af98d03c1fb71a3570896a7f5629c48d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-af98d03c1fb71a3570896a7f5629c48d"' :
                                            'id="xs-components-links-module-AppModule-af98d03c1fb71a3570896a7f5629c48d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-af98d03c1fb71a3570896a7f5629c48d"' : 'data-target="#xs-injectables-links-module-AppModule-af98d03c1fb71a3570896a7f5629c48d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-af98d03c1fb71a3570896a7f5629c48d"' :
                                        'id="xs-injectables-links-module-AppModule-af98d03c1fb71a3570896a7f5629c48d"' }>
                                        <li class="link">
                                            <a href="injectables/RestClientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RestClientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BusinessDetailsModule.html" data-type="entity-link" >BusinessDetailsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BusinessDetailsModule-62455a794e27c8f08927ba8fe886dcaa"' : 'data-target="#xs-components-links-module-BusinessDetailsModule-62455a794e27c8f08927ba8fe886dcaa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BusinessDetailsModule-62455a794e27c8f08927ba8fe886dcaa"' :
                                            'id="xs-components-links-module-BusinessDetailsModule-62455a794e27c8f08927ba8fe886dcaa"' }>
                                            <li class="link">
                                                <a href="components/BusinessDetailsBodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessDetailsBodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BusinessDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarouselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarouselComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/businessDetailsRoutingModule.html" data-type="entity-link" >businessDetailsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BusinessMenusModule.html" data-type="entity-link" >BusinessMenusModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BusinessMenusModule-1b914ecba0386bcb5f18a66c0c814ffb"' : 'data-target="#xs-components-links-module-BusinessMenusModule-1b914ecba0386bcb5f18a66c0c814ffb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BusinessMenusModule-1b914ecba0386bcb5f18a66c0c814ffb"' :
                                            'id="xs-components-links-module-BusinessMenusModule-1b914ecba0386bcb5f18a66c0c814ffb"' }>
                                            <li class="link">
                                                <a href="components/BusinessMenusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessMenusComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BusinessMenusRoutingModule.html" data-type="entity-link" >BusinessMenusRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BusinessNewBranchModule.html" data-type="entity-link" >BusinessNewBranchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BusinessNewBranchModule-5decd134d9017882df4a4441d9c43b8a"' : 'data-target="#xs-components-links-module-BusinessNewBranchModule-5decd134d9017882df4a4441d9c43b8a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BusinessNewBranchModule-5decd134d9017882df4a4441d9c43b8a"' :
                                            'id="xs-components-links-module-BusinessNewBranchModule-5decd134d9017882df4a4441d9c43b8a"' }>
                                            <li class="link">
                                                <a href="components/BusinessNewBranchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessNewBranchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BusinessNewBranchRoutingModule.html" data-type="entity-link" >BusinessNewBranchRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BusinessProfileModule.html" data-type="entity-link" >BusinessProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BusinessProfileModule-713938d562a3e8b2f8b686078c138643"' : 'data-target="#xs-components-links-module-BusinessProfileModule-713938d562a3e8b2f8b686078c138643"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BusinessProfileModule-713938d562a3e8b2f8b686078c138643"' :
                                            'id="xs-components-links-module-BusinessProfileModule-713938d562a3e8b2f8b686078c138643"' }>
                                            <li class="link">
                                                <a href="components/BusinessProfileBodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessProfileBodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BusinessProfileCarouselUploadImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessProfileCarouselUploadImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BusinessProfileCloseUploadImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessProfileCloseUploadImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BusinessProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BusinessProfileEditBankDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessProfileEditBankDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BusinessProfileEditDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessProfileEditDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BusinessProfileEditPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessProfileEditPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BusinessProfileEditWorkDaysComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessProfileEditWorkDaysComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BusinessProfileImageLocalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessProfileImageLocalsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BusinessProfileUploadImageLocalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessProfileUploadImageLocalsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BusinessProfileRoutingModule.html" data-type="entity-link" >BusinessProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BusinessRegistrationModule.html" data-type="entity-link" >BusinessRegistrationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BusinessRegistrationModule-b1c9b2e9c1f308d1f306315e68749440"' : 'data-target="#xs-components-links-module-BusinessRegistrationModule-b1c9b2e9c1f308d1f306315e68749440"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BusinessRegistrationModule-b1c9b2e9c1f308d1f306315e68749440"' :
                                            'id="xs-components-links-module-BusinessRegistrationModule-b1c9b2e9c1f308d1f306315e68749440"' }>
                                            <li class="link">
                                                <a href="components/BusinessRegistrationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessRegistrationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BusinessRegistrationRoutingModule.html" data-type="entity-link" >BusinessRegistrationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientMenusModule.html" data-type="entity-link" >ClientMenusModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientMenusModule-edfe8c3388cfe6622ddbe164179e4232"' : 'data-target="#xs-components-links-module-ClientMenusModule-edfe8c3388cfe6622ddbe164179e4232"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientMenusModule-edfe8c3388cfe6622ddbe164179e4232"' :
                                            'id="xs-components-links-module-ClientMenusModule-edfe8c3388cfe6622ddbe164179e4232"' }>
                                            <li class="link">
                                                <a href="components/ClientMenusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientMenusComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientMenusRoutingModule.html" data-type="entity-link" >ClientMenusRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientProfileModule.html" data-type="entity-link" >ClientProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientProfileModule-8a924b4269ff3096440d8db25abeb6bc"' : 'data-target="#xs-components-links-module-ClientProfileModule-8a924b4269ff3096440d8db25abeb6bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientProfileModule-8a924b4269ff3096440d8db25abeb6bc"' :
                                            'id="xs-components-links-module-ClientProfileModule-8a924b4269ff3096440d8db25abeb6bc"' }>
                                            <li class="link">
                                                <a href="components/ClientProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileImageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ClientProfileModule-8a924b4269ff3096440d8db25abeb6bc"' : 'data-target="#xs-injectables-links-module-ClientProfileModule-8a924b4269ff3096440d8db25abeb6bc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClientProfileModule-8a924b4269ff3096440d8db25abeb6bc"' :
                                        'id="xs-injectables-links-module-ClientProfileModule-8a924b4269ff3096440d8db25abeb6bc"' }>
                                        <li class="link">
                                            <a href="injectables/ClientProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientProfileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientProfileRoutingModule.html" data-type="entity-link" >ClientProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientRegistrationModule.html" data-type="entity-link" >ClientRegistrationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientRegistrationModule-ce04bf3ceb129e8179b35555ac563d80"' : 'data-target="#xs-components-links-module-ClientRegistrationModule-ce04bf3ceb129e8179b35555ac563d80"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientRegistrationModule-ce04bf3ceb129e8179b35555ac563d80"' :
                                            'id="xs-components-links-module-ClientRegistrationModule-ce04bf3ceb129e8179b35555ac563d80"' }>
                                            <li class="link">
                                                <a href="components/ClientRegistrationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientRegistrationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreateReservationModule.html" data-type="entity-link" >CreateReservationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CreateReservationModule-3ea0921b09510532ec2a514be618b505"' : 'data-target="#xs-components-links-module-CreateReservationModule-3ea0921b09510532ec2a514be618b505"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CreateReservationModule-3ea0921b09510532ec2a514be618b505"' :
                                            'id="xs-components-links-module-CreateReservationModule-3ea0921b09510532ec2a514be618b505"' }>
                                            <li class="link">
                                                <a href="components/CreateReservationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateReservationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ErrorHandlerModule.html" data-type="entity-link" >ErrorHandlerModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FrequentQuestionsModule.html" data-type="entity-link" >FrequentQuestionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FrequentQuestionsModule-dac29a05ff85bed560b32b87f8caf9ca"' : 'data-target="#xs-components-links-module-FrequentQuestionsModule-dac29a05ff85bed560b32b87f8caf9ca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FrequentQuestionsModule-dac29a05ff85bed560b32b87f8caf9ca"' :
                                            'id="xs-components-links-module-FrequentQuestionsModule-dac29a05ff85bed560b32b87f8caf9ca"' }>
                                            <li class="link">
                                                <a href="components/FrequentQuestionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FrequentQuestionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FrequentQuestionsRoutingModule.html" data-type="entity-link" >FrequentQuestionsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderModule.html" data-type="entity-link" >HeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeaderModule-46e6df206e26512be8f61250575ab403"' : 'data-target="#xs-components-links-module-HeaderModule-46e6df206e26512be8f61250575ab403"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderModule-46e6df206e26512be8f61250575ab403"' :
                                            'id="xs-components-links-module-HeaderModule-46e6df206e26512be8f61250575ab403"' }>
                                            <li class="link">
                                                <a href="components/HeaderLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderPublicComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderPublicComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-0343a74accdb24bc90c79a53958e0421"' : 'data-target="#xs-components-links-module-HomeModule-0343a74accdb24bc90c79a53958e0421"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-0343a74accdb24bc90c79a53958e0421"' :
                                            'id="xs-components-links-module-HomeModule-0343a74accdb24bc90c79a53958e0421"' }>
                                            <li class="link">
                                                <a href="components/BodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-ffa7ef72d49aa41ab8012f975c4bd403"' : 'data-target="#xs-components-links-module-LoginModule-ffa7ef72d49aa41ab8012f975c4bd403"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-ffa7ef72d49aa41ab8012f975c4bd403"' :
                                            'id="xs-components-links-module-LoginModule-ffa7ef72d49aa41ab8012f975c4bd403"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrivacyModule.html" data-type="entity-link" >PrivacyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrivacyModule-f3e6fe0a4cfac6cde7a22e3965717d35"' : 'data-target="#xs-components-links-module-PrivacyModule-f3e6fe0a4cfac6cde7a22e3965717d35"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrivacyModule-f3e6fe0a4cfac6cde7a22e3965717d35"' :
                                            'id="xs-components-links-module-PrivacyModule-f3e6fe0a4cfac6cde7a22e3965717d35"' }>
                                            <li class="link">
                                                <a href="components/PrivacyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrivacyComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrivacyRoutingModule.html" data-type="entity-link" >PrivacyRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RefundPolicyModule.html" data-type="entity-link" >RefundPolicyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RefundPolicyModule-c17c90fd80f639b5a05d5c84d23a1522"' : 'data-target="#xs-components-links-module-RefundPolicyModule-c17c90fd80f639b5a05d5c84d23a1522"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RefundPolicyModule-c17c90fd80f639b5a05d5c84d23a1522"' :
                                            'id="xs-components-links-module-RefundPolicyModule-c17c90fd80f639b5a05d5c84d23a1522"' }>
                                            <li class="link">
                                                <a href="components/RefundPolicyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefundPolicyComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RefundPolicyRoutingModule.html" data-type="entity-link" >RefundPolicyRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SearchRestaurantModule.html" data-type="entity-link" >SearchRestaurantModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchRestaurantModule-bf1ccdb4397c875390a132eb23c5882a"' : 'data-target="#xs-components-links-module-SearchRestaurantModule-bf1ccdb4397c875390a132eb23c5882a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchRestaurantModule-bf1ccdb4397c875390a132eb23c5882a"' :
                                            'id="xs-components-links-module-SearchRestaurantModule-bf1ccdb4397c875390a132eb23c5882a"' }>
                                            <li class="link">
                                                <a href="components/SearchRestaurantComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchRestaurantComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchResultsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchResultsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchRestaurantRoutingModule.html" data-type="entity-link" >SearchRestaurantRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedComponentsModule.html" data-type="entity-link" >SharedComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedComponentsModule-fc917d2237d3ce7e1e15bfd976563114"' : 'data-target="#xs-components-links-module-SharedComponentsModule-fc917d2237d3ce7e1e15bfd976563114"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedComponentsModule-fc917d2237d3ce7e1e15bfd976563114"' :
                                            'id="xs-components-links-module-SharedComponentsModule-fc917d2237d3ce7e1e15bfd976563114"' }>
                                            <li class="link">
                                                <a href="components/CloseModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CloseModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedDirectivesModule.html" data-type="entity-link" >SharedDirectivesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedDirectivesModule-d5903761c2213d8d3d5feb7ccafbc835"' : 'data-target="#xs-directives-links-module-SharedDirectivesModule-d5903761c2213d8d3d5feb7ccafbc835"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedDirectivesModule-d5903761c2213d8d3d5feb7ccafbc835"' :
                                        'id="xs-directives-links-module-SharedDirectivesModule-d5903761c2213d8d3d5feb7ccafbc835"' }>
                                        <li class="link">
                                            <a href="directives/PhoneMaskDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhoneMaskDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SanitizeHtmlDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SanitizeHtmlDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TimeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimeDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-4fcc6481a6fc4774aba2caefd0bee366"' : 'data-target="#xs-pipes-links-module-SharedModule-4fcc6481a6fc4774aba2caefd0bee366"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-4fcc6481a6fc4774aba2caefd0bee366"' :
                                            'id="xs-pipes-links-module-SharedModule-4fcc6481a6fc4774aba2caefd0bee366"' }>
                                            <li class="link">
                                                <a href="pipes/SafeHtmlPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeHtmlPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatusPayModule.html" data-type="entity-link" >StatusPayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StatusPayModule-507b1a0d6d60d574f13bb56ca782dd5c"' : 'data-target="#xs-components-links-module-StatusPayModule-507b1a0d6d60d574f13bb56ca782dd5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StatusPayModule-507b1a0d6d60d574f13bb56ca782dd5c"' :
                                            'id="xs-components-links-module-StatusPayModule-507b1a0d6d60d574f13bb56ca782dd5c"' }>
                                            <li class="link">
                                                <a href="components/CancelPayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CancelPayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RejectedPayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RejectedPayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatusPayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatusPayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuccessPayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuccessPayComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatusPayRoutingModule.html" data-type="entity-link" >StatusPayRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/DateValidator.html" data-type="entity-link" >DateValidator</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BankService.html" data-type="entity-link" >BankService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientProfileService.html" data-type="entity-link" >ClientProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientService.html" data-type="entity-link" >ClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomSnackbarCommonService.html" data-type="entity-link" >CustomSnackbarCommonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DialogService.html" data-type="entity-link" >DialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileService.html" data-type="entity-link" >FileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GlobalErrorHandler.html" data-type="entity-link" >GlobalErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InvokeDialogAuthService.html" data-type="entity-link" >InvokeDialogAuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuService.html" data-type="entity-link" >MenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentService.html" data-type="entity-link" >PaymentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RestaurantService.html" data-type="entity-link" >RestaurantService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RestClientService.html" data-type="entity-link" >RestClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchBarService.html" data-type="entity-link" >SearchBarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SocialService.html" data-type="entity-link" >SocialService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpinnerService.html" data-type="entity-link" >SpinnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TerritorialsService.html" data-type="entity-link" >TerritorialsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link" >TokenService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/InterceptorService.html" data-type="entity-link" >InterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Bank.html" data-type="entity-link" >Bank</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BankRestaurant.html" data-type="entity-link" >BankRestaurant</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BankRestaurant-1.html" data-type="entity-link" >BankRestaurant</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BankRestaurant-2.html" data-type="entity-link" >BankRestaurant</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Branch.html" data-type="entity-link" >Branch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Branch-1.html" data-type="entity-link" >Branch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Branch-2.html" data-type="entity-link" >Branch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BranchImage.html" data-type="entity-link" >BranchImage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BranchImage-1.html" data-type="entity-link" >BranchImage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BusinessDetailsResponse.html" data-type="entity-link" >BusinessDetailsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BusinessProfileResponse.html" data-type="entity-link" >BusinessProfileResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BusinessRegistrationDto.html" data-type="entity-link" >BusinessRegistrationDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BusinessRegistrationDto-1.html" data-type="entity-link" >BusinessRegistrationDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/City.html" data-type="entity-link" >City</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Claims.html" data-type="entity-link" >Claims</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Client.html" data-type="entity-link" >Client</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Country.html" data-type="entity-link" >Country</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataResponse.html" data-type="entity-link" >DataResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataResponse-1.html" data-type="entity-link" >DataResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogModel.html" data-type="entity-link" >DialogModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/favourite.html" data-type="entity-link" >favourite</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GenericDataResponse.html" data-type="entity-link" >GenericDataResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HTMLInputEvent.html" data-type="entity-link" >HTMLInputEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Image.html" data-type="entity-link" >Image</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImageProduct.html" data-type="entity-link" >ImageProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LegalRepresentative.html" data-type="entity-link" >LegalRepresentative</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Local.html" data-type="entity-link" >Local</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Menu.html" data-type="entity-link" >Menu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuResponse.html" data-type="entity-link" >MenuResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Opinion.html" data-type="entity-link" >Opinion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Opinion-1.html" data-type="entity-link" >Opinion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Opinion-2.html" data-type="entity-link" >Opinion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Payment.html" data-type="entity-link" >Payment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaymentCreateResponse.html" data-type="entity-link" >PaymentCreateResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaymentKhipuRequest.html" data-type="entity-link" >PaymentKhipuRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Price.html" data-type="entity-link" >Price</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product-1.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Representative.html" data-type="entity-link" >Representative</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Representative-1.html" data-type="entity-link" >Representative</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reservation.html" data-type="entity-link" >Reservation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Restaurant.html" data-type="entity-link" >Restaurant</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Restaurant-1.html" data-type="entity-link" >Restaurant</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Restaurant-2.html" data-type="entity-link" >Restaurant</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Schedule.html" data-type="entity-link" >Schedule</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Schedule-1.html" data-type="entity-link" >Schedule</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Schedule-2.html" data-type="entity-link" >Schedule</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchRestaurantRequest.html" data-type="entity-link" >SearchRestaurantRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchRestaurantResponse.html" data-type="entity-link" >SearchRestaurantResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Token.html" data-type="entity-link" >Token</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/SafeHtmlPipe.html" data-type="entity-link" >SafeHtmlPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});