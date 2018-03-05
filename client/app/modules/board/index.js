import angular from 'angular';

import './todo-item';
import './modals/add-todo';

import BoardService from './base/board.service';
import BoardComponent from './base/board.component';

export default angular.module('jira-board',
    [
        'board.modals',
        'board.todo-item'
    ])
    .service('BoardService', BoardService)
    .component('board', BoardComponent)
    .config(appRoutes)
    .name;

appRoutes.$inject = ['$stateProvider'];
function appRoutes($stateProvider) {
    $stateProvider
        .state('board', {
            parent: 'app-layout',
            url: '/board',
            component: 'board',

        })
}