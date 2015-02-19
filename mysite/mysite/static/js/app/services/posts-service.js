Post.factory('QuestionService', function ($http, $q, $log) {
    // This needs to match the url from Django.
    var api_url = "/questions/";
    return {
        get: function (post_id) {
            var url = api_url + post_id + "/";
            var defer = $q.defer();
            $http({method: 'GET', url: url}).
                success(function (data, status, headers, config) {
                    $log.log(data);
                    defer.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    $log.log(data);
                    defer.reject(status);
                });
            return defer.promise;
        },
        list: function () {
            var defer = $q.defer();
            $http({method: 'GET', url: api_url}).
                success(function (data, status, headers, config) {
                    $log.log(data);
                    defer.resolve(data);
                }).error(function (data, status, headers, config) {
                    $log.log(data);
                    defer.reject(status);
                });
            return defer.promise;
        },
        //update: function (post) {
        //    var url = api_url + post.id + "/";
        //    var defer = $q.defer();
        //    $http({method: 'PUT',
        //        url: url,
        //        data: post}).
        //        success(function (data, status, headers, config) {
        //            defer.resolve(data);
        //        }).error(function (data, status, headers, config) {
        //            defer.reject(status);
        //        });
        //    return defer.promise;
        //},
        //save: function (post) {
        //    var url = api_url;
        //    var defer = $q.defer();
        //    $http({method: 'POST',
        //        url: url,
        //        data: post}).
        //        success(function (data, status, headers, config) {
        //            defer.resolve(data);
        //        }).error(function (data, status, headers, config) {
        //            defer.reject(status);
        //        });
        //    return defer.promise;
        //},
    }
});