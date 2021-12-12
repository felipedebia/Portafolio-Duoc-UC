export class ApiResponse<Type>
{
    error:boolean;
    msg:string;
    data:Type[] = [];
    innerExceptions:string[] = [];
    success:boolean = false;
    isFailed:boolean = true;  
    
}