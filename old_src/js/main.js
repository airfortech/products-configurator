jQuery(document).ready(function($){
	function ProductBuilder( element ) {
		this.element = element;
		this.stepsWrapper = this.element.children('.cd-builder-steps');
		this.steps = this.element.find('.builder-step');
		this.models = this.element.find('[data-selection="models"]'); 
		this.summary;
		this.optionsLists = this.element.find('.options-list');
		//podsumowanie
		this.fixedSummary = this.element.find('.cd-builder-footer');
		this.modelPreview = this.element.find('.selected-product').find('img');
		this.totPriceWrapper = this.element.find('.tot-price').find('b');
		//nawigacja
		this.mainNavigation = this.element.find('.cd-builder-main-nav');
		this.secondaryNavigation = this.element.find('.cd-builder-secondary-nav');
		//sprawdza, czy wszystko sie poprawnie zaladowalo
		this.loaded = true;
		
		this.bindEvents();
	}

	ProductBuilder.prototype.bindEvents = function() {
		var self = this;

		//wykrywa klikniecie na nawigacje z lewej strony
		this.mainNavigation.on('click', 'li:not(.active)', function(event){
			event.preventDefault();
			self.loaded && self.newContentSelected($(this).index());
		});

		//wykrywa klikniecie na dole
		this.secondaryNavigation.on('click', '.nav-item li:not(.buy)', function(event){ 
			event.preventDefault();
			var stepNumber = ( $(this).parents('.next').length > 0 ) ? $(this).index() + 1 : $(this).index() - 1;
			self.loaded && self.newContentSelected(stepNumber);
		});
		//wykrywa klik na liscie u gory (podsumowanie, kolory itd)
		this.optionsLists.on('click', '.js-option', function(event){
			self.updateListOptions($(this));
		});
		//wykrywa klik podczas "ubierania" sprzetu
 		this.stepsWrapper.on('click', '.cd-product-customizer a', function(event){
			event.preventDefault();
			self.customizeModel($(this));
		});
	};

	ProductBuilder.prototype.newContentSelected = function(nextStep) {
		//sprawdza, czy produkt zostal wybrany
		if( this.fixedSummary.hasClass('disabled') ) {
			//jesli nie - pokazuje alert 
			this.fixedSummary.addClass('show-alert');
		} else {
			//jezeli zostal wybrany, przechodzi dalej
			//sprawdza, czy kolor zostal wybrany
			if( this.steps.filter('.active').is('[data-selection="colors"]') ) {
				//jezeli kolor zostal zmieniony, zaktualizuj zdjecie
				var imageSelected = this.steps.filter('.active').find('.cd-product-previews').children('.selected').children('img').attr('src');
				this.modelPreview.attr('src', imageSelected);
			}
			//zaktualizuj podglad produktu na dole
			if( nextStep + 1 >= this.steps.length ) {
				this.createSummary();
			}
			
			this.showNewContent(nextStep);
			this.updatePrimaryNav(nextStep);
			this.updateSecondaryNav(nextStep);
		}
	}

	ProductBuilder.prototype.showNewContent = function(nextStep) {
		var actualStep = this.steps.filter('.active').index() + 1;
		if( actualStep < nextStep + 1 ) {
			//nawiguj do nastepnej sekcji
			this.steps.eq(actualStep-1).removeClass('active back').addClass('move-left');
			this.steps.eq(nextStep).addClass('active').removeClass('move-left back');
		} else {
			//powroc do poprzedniej sekcji
			this.steps.eq(actualStep-1).removeClass('active back move-left');
			this.steps.eq(nextStep).addClass('active back').removeClass('move-left');
		}
	}

	ProductBuilder.prototype.updatePrimaryNav = function(nextStep) {
		this.mainNavigation.find('li').eq(nextStep).addClass('active').siblings('.active').removeClass('active');
	}

	ProductBuilder.prototype.updateSecondaryNav = function(nextStep) {
		( nextStep == 0 ) ? this.fixedSummary.addClass('step-1') : this.fixedSummary.removeClass('step-1');

		this.secondaryNavigation.find('.nav-item.next').find('li').eq(nextStep).addClass('visible').removeClass('visited').prevAll().removeClass('visited').addClass('visited').end().nextAll().removeClass('visible visited');
		this.secondaryNavigation.find('.nav-item.prev').find('li').eq(nextStep).addClass('visible').removeClass('visited').prevAll().removeClass('visited').addClass('visited').end().nextAll().removeClass('visible visited');
	}

	ProductBuilder.prototype.createSummary = function() {
		var self = this;
		this.steps.each(function(){
			var step = $(this);
			if( $(this).data('selection') == 'colors' ) {
				//podsumowanie - kolor
				var colorSelected = $(this).find('.cd-product-customizer').find('.selected'),
					color = colorSelected.children('a').data('color'),
					colorName = colorSelected.data('content'),
					imageSelected = $(this).find('.cd-product-previews').find('.selected img').attr('src');
				
				self.summary.find('.summary-color').find('.color-label').text(colorName).siblings('.color-swatch').attr('data-color', color);
				self.summary.find('.product-preview').attr('src', imageSelected);
			} else if( $(this).data('selection') == 'accessories' ) {
				var selectedOptions = $(this).find('.js-option.selected'),
					optionsContent = '';

				if( selectedOptions.length == 0 ) {
					optionsContent = '<li><p>Nie wybrano żadnych akcesoriów;</p></li>';
				} else {
					selectedOptions.each(function(){
						optionsContent +='<li><p>'+$(this).find('p').text()+'</p></li>';
					});
				}

				self.summary.find('.summary-accessories').children('li').remove().end().append($(optionsContent));
			}
		});
	}

	ProductBuilder.prototype.updateListOptions = function(listItem) {
		var self = this;
		
		if( listItem.hasClass('js-radio') ) {
			//pozwala na wybranie tylko jednej opcji w produktach 
			var alreadySelectedOption = listItem.siblings('.selected'),
				price = (alreadySelectedOption.length > 0 ) ? -Number(alreadySelectedOption.data('price')) : 0;

			//odznaczenie opcji
			( listItem.hasClass('selected') ) 
				? price = -Number(listItem.data('price'))
				: price = Number(listItem.data('price')) + price;

			//odznacz wszystkie opcje
			alreadySelectedOption.removeClass('selected');
			//przelacz opcje
			listItem.toggleClass('selected');
			//zaktualizuj totalPrice
			(listItem.parents('[data-selection="models"]').length == 0) && self.updatePrice(price);
		} else {
			//mozna wybrac jedna niz wiecej opcji
			var price = ( listItem.hasClass('selected') ) ? -Number(listItem.data('price')) : Number(listItem.data('price'));
			//przelacz opcje
			listItem.toggleClass('selected');
			//zaktualizuj totalPrice
			self.updatePrice(price);
		}
		
		if( listItem.parents('[data-selection="models"]').length > 0 ) {
			self.updateModelContent(listItem);
		}
	};

	ProductBuilder.prototype.updateModelContent = function(model) {
		var self = this;
		if( model.hasClass('selected') ) {
			var modelType = model.data('model'),
				modelImage = model.find('img').attr('src');

			this.modelPreview.attr('src', modelImage);

			//usun tresc odnoszaca sie do innego modelu
			this.models.siblings('li').remove();
			//zaladuj nowa tresc
			$.ajax({
		        type       : "GET",
		        dataType   : "html",
		        url        : modelType+".html",
		        beforeSend : function(){
		        	self.loaded = false;
		        	model.siblings().removeClass('loaded');
		        },
		        success    : function(data){
		        	self.models.after(data);
		        	self.loaded = true;
		        	model.addClass('loaded');
		        	//aktywuj nawigacje
		        	self.fixedSummary.add(self.mainNavigation).removeClass('disabled show-alert');
		        	//zaktualizuj dane obiektu
					self.steps = self.element.find('.builder-step');
					self.summary = self.element.find('[data-selection="summary"]');
					//wykrywa klik na liscie opcji
					self.optionsLists.off('click', '.js-option');
					self.optionsLists = self.element.find('.options-list');
					self.optionsLists.on('click', '.js-option', function(event){
						self.updateListOptions($(this));
					});

					//nie wczytuj animacji przy pierwszym wczytaniu nowej zawartosci
					self.element.find('.first-load').removeClass('first-load');
		        },
		        error     : function(jqXHR, textStatus, errorThrown) {
		        }
			});

			//zaktualizuj cene
			this.totPriceWrapper.text(model.data('price'));
		} else {
			//nie wybrano produktu
			this.fixedSummary.add(this.mainNavigation).addClass('disabled');
			//zaktualizuj cene
			this.totPriceWrapper.text('0');

			this.models.find('.loaded').removeClass('loaded');
		}
	};

	ProductBuilder.prototype.customizeModel = function(target) {
		var parent = target.parent('li')
			index = parent.index();
		
		//zaktualizuj podsumowanie
		var price = ( parent.hasClass('selected') )
			? 0
			: Number(parent.data('price')) - parent.siblings('.selected').data('price');

		this.updatePrice(price);
		target.parent('li').addClass('selected').siblings().removeClass('selected').parents('.cd-product-customizer').siblings('.cd-product-previews').children('.selected').removeClass('selected').end().children('li').eq(index).addClass('selected');
	};

	ProductBuilder.prototype.updatePrice = function(price) {
		var actualPrice = Number(this.totPriceWrapper.text()) + price;
		this.totPriceWrapper.text(actualPrice);
	};

	if( $('.cd-product-builder').length > 0 ) {
		$('.cd-product-builder').each(function(){
			new ProductBuilder($(this));
		});
	}
});