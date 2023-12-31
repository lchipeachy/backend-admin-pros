/* eslint-disable prettier/prettier */
import { UseGuards, applyDecorators } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { ValidRoles } from "../enum/valid-roles.enum";
import { RoleProtected } from "./role-protected.decorator";
import { UserRoleGuard } from "../guards";

export function Auth(...roles: ValidRoles[]) {
    return applyDecorators(
        RoleProtected(...roles),
        UseGuards(AuthGuard(), UserRoleGuard), 
    );
}