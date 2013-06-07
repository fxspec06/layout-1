
enyo.kind({
	name : 'enyo.sample.FlexLayoutSample',
	classes: 'flex-layout-sample enyo-fit',
	layoutKind: 'VFlexLayout',
	spacing: 10,
	components: [
		{name: 'row0', layoutKind: 'HFlexLayout', flex: true, spacing: 10, components: [
			{name: 'col0', classes: 'leaf column', components: [
				{name: 'button1', kind: 'onyx.Button', content: 'Add content to Col1', ontap: 'addContent1', style: 'width: 200px'},
				{name: 'button2', kind: 'onyx.Button', content: 'Add content to Row1', ontap: 'addContent2', style: 'width: 200px'},
			]}, 
			{name: 'col1', classes: 'leaf', layoutKind: 'ContentLayout', minWidth: 200, maxWidth: 300},
			{name: 'col2', content: 'column 2', classes: 'leaf', flex: true, layoutKind: 'VFlexLayout', spacing: 10, components:[
				{name: 'row1', classes: 'leaf', layoutKind: 'ContentLayout', minHeight: 100, maxHeight: 200},
				{ 
					name         : 'scroller',
					kind         : 'Scroller',
					flex         : true,
					style        : 'padding: 0',
					strategyKind : 'TouchScrollStrategy',
					components   : [
						{kind: 'Repeater', onSetupItem:'setupItem', components: [
							{name:'item', classes:'repeater-sample-item', components: [
								{tag:'span', name: 'personNumber'},
								{tag:'span', name: 'personName'}
							]}
						]}
					]
				}
			]},
			{name: 'col3', content: 'column 3', classes: 'leaf', flex: true},
			{name: 'col4', content: 'column 4', classes: 'leaf', flex: true},
			{name: 'col5', content: 'column 5', classes: 'leaf', flex: true},
		]},
		{name: 'row01', classes: 'leaf', components: [
			{kind: 'onyx.Button', content: 'hello'}
		]}
	],

	statics: {
		sLoremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
		'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
		'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
		'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
		'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ' +
		'occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit ' +
		'anim id est laborum.'
	},
	
	people: [
		{name: 'Andrew', sex:'male'},
		{name: 'Betty', sex:'female'},
		{name: 'Christopher', sex:'male'},
		{name: 'Donna', sex:'female'},
		{name: 'Ephraim', sex:'male'},
		{name: 'Frankie', sex:'male'},
		{name: 'Gerald', sex:'male'},
		{name: 'Heather', sex:'female'},
		{name: 'Ingred', sex:'female'},
		{name: 'Jack', sex:'male'},
		{name: 'Kevin', sex:'male'},
		{name: 'Lucy', sex:'female'},
		{name: 'Matthew', sex:'male'},
		{name: 'Noreen', sex:'female'},
		{name: 'Oscar', sex:'male'},
		{name: 'Pedro', sex:'male'},
		{name: 'Quentin', sex:'male'},
		{name: 'Ralph', sex:'male'},
		{name: 'Steven', sex:'male'},
		{name: 'Tracy', sex:'female'},
		{name: 'Uma', sex:'female'},
		{name: 'Victor', sex:'male'},
		{name: 'Wendy', sex:'female'},
		{name: 'Xin', sex:'male'},
		{name: 'Yulia', sex:'female'}
	],
	
	create: function() {
		this.inherited(arguments);
		this.$.repeater.setCount(this.people.length);
	},
	
	setupItem: function(inSender, inEvent) {
		var index = inEvent.index;
		var item = inEvent.item;
		var person = this.people[index];
		item.$.personNumber.setContent((index+1) + '. ');
		item.$.personName.setContent(person.name);
		return true;
	},

	addContent1: function() {
		this.$.col1.addContent('hello world ');
		this.$.col1.layout.reflow();
		this.$.col2.layout.reflow();
	},

	addContent2: function() {
		this.$.row1.addContent(' asdflkjasdf lkajdsflkjasdflkj ;lkasjdf;lk a;lksdjf klsjdflkjsdflkj lksdjf lksdjf sdfsdfslkj kljsdf');
		this.$.row1.layout.reflow();
		this.$.col1.layout.reflow();
		// this.$.col2.layout.reflow();
	},

	appendContent3: function() {
		this.$.content3.addContent(' Bar Foo Bar Foo Bar Foo');
	},
});