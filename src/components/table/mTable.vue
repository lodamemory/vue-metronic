<template>
    <div class="table-scrollable">
        <table class="table table-striped table-bordered table-hover dataTable no-footer" >
            <thead>
                <tr role="row">
                    <th class="table-checkbox sorting_disabled" >
                        <div class="checker">
                            <span><input type="checkbox" class="group-checkable"></span>
                        </div>
                    </th>
                    <th class="sorting_asc">Username</th>
                    <th class="sorting">Email</th>
                    <th class="sorting">Status</th>
                    <th class="sorting">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr class="gradeX odd" role="row">
                    <td>
                        <div class="checker"><span><input type="checkbox" class="checkboxes" value="1"></span></div>
                    </td>
                    <td class="sorting_1">coop</td>
                    <td>
                        <a href="mailto:userwow@gmail.com">good@gmail.com </a>
                    </td>
                    <td>
                        <span class="label label-sm label-success">Approved </span>
                    </td>
                    <td>
                        <span class="label label-sm label-success">Approved </span>
                    </td>
                </tr>
                <tr class="gradeX even" role="row">
                    <td>
                      <div class="checker"><span><input type="checkbox" class="checkboxes" value="1"></span></div>
                    </td>
                    <td class="sorting_1">foopl</td>
                    <td>
                        <a href="mailto:userwow@gmail.com">good@gmail.com </a>
                    </td>
                    <td>
                        <span class="label label-sm label-success">Approved </span>
                    </td>
                    <td>
                        <span class="label label-sm label-success">Approved </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>