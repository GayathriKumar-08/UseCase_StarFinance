package com.starfinaceproject.starfinanceproject.Controller;

import java.util.Date;
import java.util.Random;

import com.starfinaceproject.starfinanceproject.Entity.ErrorClass;
import com.starfinaceproject.starfinanceproject.Entity.KNnotFoundException;
import com.starfinaceproject.starfinanceproject.Entity.ProofNumberNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class Globalhandler  extends ResponseEntityExceptionHandler {
    @ExceptionHandler(value = {KNnotFoundException.class})
    public ResponseEntity<ErrorClass> handlerExceptions(KNnotFoundException e,WebRequest r)
    {
        ErrorClass ec=new ErrorClass();
        ec.setDt(new Date());
        ec.setErrcode("ERR"+new Random().nextInt());
        ec.setMessage(e.toString().concat(", Reload or Try again later"));
        ec.setStatus("Failed....");
       
        System.err.println("Error caused......");
        e.printStackTrace();
        return new ResponseEntity<ErrorClass>(ec,HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = {ProofNumberNotFoundException.class})
    public ResponseEntity<ErrorClass> handlerExceptions(ProofNumberNotFoundException e,WebRequest r)
    {
        ErrorClass ec=new ErrorClass();
        ec.setDt(new Date());
        ec.setErrcode("ERR"+new Random().nextInt());
        ec.setMessage(e.toString().concat(", Reload or Try again later"));
        ec.setStatus("Failed....");
       
        System.err.println("Error caused......");
        e.printStackTrace();
        return new ResponseEntity<ErrorClass>(ec,HttpStatus.BAD_REQUEST);
    }

}
