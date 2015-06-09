(function () {

    window.Pt || (window.Pt = {})
    Pt.Helpers || (Pt.Helpers = {});
    Pt.Helpers.BaseController = BaseController

    function BaseController () {
        this.routes = [
            {route : 'create', controller : _.bind(this.create, this)},
            {route : 'read', controller : _.bind(this.read, this)},
            {route : 'update', controller : _.bind(this.update, this)},
            {route : 'delete', controller : _.bind(this.delete, this)}
        ];

    }

    BaseController.prototype = {
        create : function () {
            console.log('create of BaseController', this);
        },

        read : function () {
            console.log('read of BaseController', this);
        },

        update : function () {
            console.log('update of BaseController', this);
        },

        delete : function () {
            console.log('delete of BaseController', this);
        }
    }


})();

(function (BaseController) {

    window.Pt || (window.Pt = {})
    Pt.Helpers || (Pt.Helpers = {});
    Pt.Helpers.Controller = Controller

    function Controller () {

        function ctor () {
            BaseController.call(this);
        }

        ctor.prototype = Object.create(BaseController.prototype);
        ctor.prototype.constructor = ctor;

        _.extend( ctor.prototype, {
            init : init,
            create : create
        });

        return new ctor();

        ///////////////////////////////

        function init () {
            var router = new Grapnel();
            _.each(this.routes, function (route) {
                router.get(route.route, route.controller);
            })
        }

        function create () {
            console.log('create of controller');
        }



    }






})(Pt.Helpers.BaseController);

var x = new Pt.Helpers.Controller();
x.init()
